/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/
'use client';

import { useEffect } from "react";
import useStateMounted from "./useStateMounted";

export interface DownloadFile {
  url: string;
  filename: string;
}

export type DownloadResponse = [
  loading: boolean,
  setDownload: React.Dispatch<React.SetStateAction<DownloadFile | undefined>>,
  download: DownloadFile | undefined,
  error: string | null
];

function useDownload(onProgress?: (percent: number) => void): DownloadResponse {

  const [loading, setLoading] = useStateMounted<boolean>(false);
  const [download, setDownload] = useStateMounted<DownloadFile>();
  const [error, setError] = useStateMounted<string | null>(null);

  useEffect(() => {
    if (!download) return;

    const xhr = new XMLHttpRequest();
    setLoading(true);
    setError(null);

    xhr.open("GET", download.url, true);
    xhr.responseType = "blob";

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const blobUrl = window.URL.createObjectURL(xhr.response);
        const anchor = document.createElement('a');
        anchor.href = blobUrl;
        anchor.download = download.filename;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        window.URL.revokeObjectURL(blobUrl);
      } else {
        setError(`Download failed with status ${xhr.status}`);
      }
      setLoading(false);
      setDownload(undefined);
    };

    xhr.onerror = function () {
      setError("Download failed due to network error.");
      setLoading(false);
      setDownload(undefined);
    };

    if (onProgress) {
      xhr.onprogress = function (event) {
        if (event.lengthComputable) {
          const percent = (event.loaded / event.total) * 100;
          onProgress(percent);
        }
      };
    }

    xhr.send();

    // Cleanup (abort if component unmounts mid-request)
    return () => {
      xhr.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [download]);

  return [loading, setDownload, download, error];
}

export default useDownload;
