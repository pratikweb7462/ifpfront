export default class FormService {
  private _isvalidating: boolean = false;
  private _isvalid: boolean = false;
  private _debouncedListeners: WeakMap<HTMLElement, Function> | null = null;
  private _form: any | null;
  private _fields: any[] = [];
  private _options: Record<string, any> = {
    fieldSelector: "input, select, textarea, [contenteditable]",
    excludeField: [
      "submit",
      "button",
      "reset",
      "hidden",
      ":disabled",
      ":readonly",
    ],
  };
  private _excludeFieldSyntax: any = null;
  private _utils: any = {
    // Check if the value is empty
    isEmpty: (value: any) => {
      return (
        value === null ||
        value === undefined ||
        (typeof value === "string" && value.trim() === "")
      );
    },
    // Check if the value is a number
    isNumber: (value: any) => {
      return (
        typeof value === "number" ||
        (!isNaN(value) && !isNaN(parseFloat(value)))
      );
    },
    // Get label text for the specified field
    getLabelText: (field: any) => {
      const _field: any =
        field instanceof HTMLElement ? field : this.getElement(field);

      const label: any = _field?.id
        ? document.querySelector(`label[for="${_field.id}"]`)
        : null;

      return label
        ? label.innerText
        : _field?.name ||
            _field?.placeholder ||
            (typeof _field === "string" ? _field : "field");
    },
    // Condition Checking
    checkCondition: (matchValue: any, operator: string, value: any) => {
      switch (operator) {
        case "=":
        case "==":
          return matchValue == value;
        case "===":
          return matchValue === value;
        case "!=":
          return matchValue != value;
        case ">":
          return matchValue > value;
        case "<":
          return matchValue < value;
        case ">=":
          return matchValue >= value;
        case "<=":
          return matchValue <= value;
        default:
          return false;
      }
    },
    // Get MIME type from file extension
    getMimeType: (ext = null) => {
      const result = [];

      if (!ext) {
        for (const types of Object.values(this._utils.mimeTypes)) {
          result.push(...(types as string[]));
        }
        return [...new Set(result)];
      }

      const exts = Array.isArray(ext) ? ext : [ext];
      for (const ext of exts) {
        if (this._utils.mimeTypes[ext]) {
          result.push(...this._utils.mimeTypes[ext]);
        }
      }
      return [...new Set(result)];
    },
    // Get file extension from MIME type
    getExtensionFromMimeType: (mime: string | string[]) => {
      const result = [];
      const mimes = Array.isArray(mime) ? mime : [mime];
      for (const ext in this._utils.mimeTypes) {
        const types = this._utils.mimeTypes[ext];
        for (let i = 0; i < types.length; i++) {
          if (mimes.includes(types[i])) {
            result.push(ext);
            break;
          }
        }
      }
      return result;
    },
    // MIME types
    mimeTypes: {
      // Documents
      pdf: [
        "application/pdf",
        "application/acrobat",
        "application/nappdf",
        "application/x-pdf",
        "image/pdf",
      ],
      doc: [
        "application/msword",
        "application/vnd.ms-word",
        "application/x-msword",
        "zz-application/zz-winassoc-doc",
      ],
      docx: [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
      xls: [
        "application/vnd.ms-excel",
        "application/msexcel",
        "application/x-msexcel",
        "zz-application/zz-winassoc-xls",
      ],
      xlsx: [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ],
      ppt: [
        "application/vnd.ms-powerpoint",
        "application/mspowerpoint",
        "application/powerpoint",
        "application/x-mspowerpoint",
      ],
      pptx: [
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ],
      txt: ["text/plain"],
      rtf: ["application/rtf", "text/rtf"],
      odt: ["application/vnd.oasis.opendocument.text"],
      ods: ["application/vnd.oasis.opendocument.spreadsheet"],

      // Images
      jpg: ["image/jpeg", "image/pjpeg"],
      jpeg: ["image/jpeg", "image/pjpeg"],
      png: ["image/png", "image/apng", "image/vnd.mozilla.apng"],
      gif: ["image/gif"],
      tiff: ["image/tiff"],
      bmp: ["image/bmp", "image/x-bmp", "image/x-ms-bmp"],
      webp: ["image/webp"],
      svg: ["image/svg+xml", "image/svg"],
      ico: [
        "application/ico",
        "image/ico",
        "image/icon",
        "image/vnd.microsoft.icon",
        "image/x-ico",
        "image/x-icon",
        "text/ico",
      ],

      // Audio
      mp3: [
        "audio/mpeg",
        "audio/mp3",
        "audio/x-mp3",
        "audio/x-mpeg",
        "audio/x-mpg",
      ],
      wav: ["audio/wav", "audio/vnd.wave", "audio/wave", "audio/x-wav"],
      ogg: [
        "audio/ogg",
        "audio/vorbis",
        "audio/x-flac+ogg",
        "audio/x-ogg",
        "audio/x-oggflac",
        "audio/x-speex+ogg",
        "audio/x-vorbis",
        "audio/x-vorbis+ogg",
        "video/ogg",
        "video/x-ogg",
        "video/x-theora",
        "video/x-theora+ogg",
      ],
      aac: ["audio/aac", "audio/x-aac", "audio/x-hx-aac-adts"],
      flac: ["audio/flac", "audio/x-flac"],

      // Video
      mp4: ["video/mp4", "application/mp4", "video/mp4v-es", "video/x-m4v"],
      webm: ["video/webm"],
      avi: [
        "video/avi",
        "video/divx",
        "video/msvideo",
        "video/vnd.avi",
        "video/vnd.divx",
        "video/x-avi",
        "video/x-msvideo",
      ],
      mov: ["video/quicktime"],
      mkv: ["video/x-matroska"],
      flv: [
        "video/x-flv",
        "application/x-flash-video",
        "flv-application/octet-stream",
        "video/flv",
      ],
      ogv: ["video/ogg", "video/x-ogg"],

      // Code & Text
      html: ["text/html", "application/xhtml+xml"],
      json: ["application/json", "application/schema+json"],
      xml: ["application/xml", "text/xml"],
      csv: [
        "text/csv",
        "application/csv",
        "text/x-comma-separated-values",
        "text/x-csv",
      ],
    },
    // Dispatch custom events
    dispatchCustomEvent: (
      field: HTMLElement,
      eventName: string,
      detail = {}
    ) => {
      const event = new CustomEvent(eventName, {
        bubbles: true,
        cancelable: true,
        detail,
      });
      field.dispatchEvent(event);
    },
    // Get the comparison date based on the input date and format
    getComparisonDate: (date: string, format = "YYYY-MM-DD") => {
      const now = new Date();
      switch (date.toLowerCase()) {
        case "today":
          return new Date(now.setHours(0, 0, 0, 0)); // Today at 00:00:00
        case "tomorrow":
          now.setDate(now.getDate() + 1);
          now.setHours(0, 0, 0, 0);
          return new Date(now); // Tomorrow at 00:00:00
        case "week":
          now.setDate(now.getDate() + 7);
          now.setHours(0, 0, 0, 0);
          return new Date(now); // One week from now at 00:00:00
        default:
          // Parse the default date according to the format
          return this._utils.parseDate(date, format)?.date || null; // Return the parsed date or null if parsing fails
      }
    },
    parseDate: (dateStr: string, format: string) => {
      const lowerFormat = format.toLowerCase();
      const regex: { [key: string]: RegExp } = {
        "yyyy-mm-dd": /^(\d{4})[-](\d{2})[-](\d{2})$/,
        "yyyy/mm/dd": /^(\d{4})[\/](\d{2})[\/](\d{2})$/,
        "dd-mm-yyyy": /^(\d{2})[-](\d{2})[-](\d{4})$/,
        "dd/mm/yyyy": /^(\d{2})[\/](\d{2})[\/](\d{4})$/,
        "mm-dd-yyyy": /^(\d{2})[-](\d{2})[-](\d{4})$/,
        "mm/dd/yyyy": /^(\d{2})[\/](\d{2})[\/](\d{4})$/,
      };

      const formatRegex = regex[lowerFormat];
      if (!formatRegex) return null; // If the format is not supported, return null

      const match = dateStr.match(formatRegex);
      if (!match) return null; // If input doesn't match the regex, return null

      const [_, part1, part2, part3] = match;
      let year = "",
        month = "",
        day = "";

      if (lowerFormat === "yyyy-mm-dd" || lowerFormat === "yyyy/mm/dd") {
        year = part1;
        month = part2;
        day = part3;
      } else if (lowerFormat === "dd-mm-yyyy" || lowerFormat === "dd/mm/yyyy") {
        year = part3;
        month = part2;
        day = part1;
      } else if (lowerFormat === "mm-dd-yyyy" || lowerFormat === "mm/dd/yyyy") {
        year = part3;
        month = part1;
        day = part2;
      }

      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      date.setHours(0, 0, 0, 0); // Set time to midnight
      // Return the constructed date object
      return {
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day),
        date: date,
      };
    },
  };
  private _errorMessages: Record<string, string> = {
    nullable: "This field must be null.",
    required: "This field is required.",
    required_if: "This field is required when :other is :value.",
    email: "This field must be a valid email address.",
    numeric: "This field must be a number.",
    integer: "This field must be an integer.",
    digits: "This field must be :digits digits.",
    digits_between: "This field must be between :min and :max digits.",
    alpha: "This field field must only contain letters.",
    alpha_num: "This field must only contain letters and numbers.",
    alpha_dash:
      "This field must only contain letters, numbers, dashes, and underscores.",
    url: "This field must be a valid URL.",
    date: "This field must be a valid date.",
    date_between: "This field must be between :min and :max.",
    date_before: "This field must be a date before :date.",
    before_or_equal: "This field must be a date before or equal to :date.",
    date_after: "This field must be a date after :date.",
    after_or_equal: "This field must be a date after or equal to :date.",
    date_format: "This field must match the format :format.",
    json: "This field must be a valid JSON string.",
    ip: "This field must be a valid :version address.",
    contains: "This field is missing a required value.",
    boolean: "This field must be true or false.",
    minlength: "This field must be at least :length characters.",
    maxlength: "This field may not be greater than :length characters.",
    starts_with: "This field must start with one of the following: :prefixes.",
    ends_with: "This field must end with one of the following: :suffixes.",
    in: "This field must be one of the following: :values.",
    not_in: "This field must not be one of the following: :values.",
    same: "This field must match :other.",
    pattern: "This field format is invalid.",
    regex: "This field format is invalid.",
    not_regex: "This field format is invalid.",
    min: "This field must be greater than or equal to :min.",
    max: "This field must be less than or equal to :max.",
    between: "This field must be between :min and :max.",
    size: "This field must be :size kilobytes.",
    min_size: "This field must be greater than or equal to :size kilobytes.",
    max_size: "This field must be less than or equal to :size kilobytes.",
    between_size: "This field must be between :min and :max kilobytes.",
    mimes: "This field must be a file of type: :values.",
    uuid: "This field must be a valid UUID.",
    server: "This field must be valid.",
  };
  private _rules: Record<string, { handler: Function; message: Function }> = {
    nullable: {
      handler: (element: any) => {
        return this._utils.isEmpty(element.value);
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("nullable", element);
      },
    },
    required: {
      handler: (element: any) => {
        const type = element.type;
        const tag = element.tagName;

        // Handle checkbox/radio group
        if (["checkbox", "radio"].includes(type)) {
          const group = document.getElementsByName(element.name);
          return Array.from(group).some(
            (el) => (el as HTMLInputElement).checked
          );
        }

        // Handle file input
        if (type === "file") {
          return element.files.length > 0;
        }

        // Handle select (single or multiple)
        if (tag === "SELECT") {
          return Array.from(element.selectedOptions || []).some(
            (opt) => (opt as HTMLOptionElement).value.trim() !== ""
          );
        }

        // Default input/textarea case
        return element.value?.trim() !== "";
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("required", element);
      },
    },
    required_if: {
      handler: (element: any, field: any, operator: any, value = "") => {
        const validOps = ["=", "==", "===", "!=", ">", "<", ">=", "<="];

        // Support optional operator (default '=' if skipped)
        if (!validOps.includes(operator)) {
          value = operator;
          operator = "=";
        }

        const target = this.getElement(field);
        if (!target) return false;

        let targetValue;

        switch (target.type) {
          case "checkbox":
          case "radio":
            const selected = Array.from(
              document.getElementsByName(target.name)
            ).filter((i) => (i as HTMLInputElement).checked);
            targetValue = selected.map((i) => (i as HTMLInputElement).value);
            break;
          case "file":
            targetValue = target.files.length;
            break;
          default:
            if (target.tagName === "SELECT") {
              targetValue = Array.from(target.selectedOptions).map((o) =>
                (o as HTMLOptionElement).value.trim()
              );
            } else {
              targetValue = target.value.trim();
            }
        }

        const conditionMet = Array.isArray(targetValue)
          ? targetValue.some((val) =>
              this._utils.checkCondition(val, operator, value)
            )
          : this._utils.checkCondition(targetValue, operator, value);

        return conditionMet ? this._rules.required.handler(element) : true;
      },
      message: (element: any, message = "", field: any, value = "") => {
        const other = this._utils.getLabelText(field);
        return (message || this.getErrorMessage("required_if", element))
          .replace(":other", other)
          .replace(":value", value);
      },
    },
    email: {
      handler: (element: any) => {
        // Allow empty input or Standard email regex: local@domain.tld
        return (
          this._utils.isEmpty(element.value) ||
          /^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,}$/.test(element.value)
        );
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("email", element);
      },
    },
    numeric: {
      handler: (element: any) => {
        // Allow empty input or Standard numeric regex: -123.45 or 123.45
        return (
          this._utils.isEmpty(element.value) ||
          /^-?\d+(\.\d+)?$/.test(element.value)
        );
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("numeric", element);
      },
    },
    integer: {
      handler: (element: any) => {
        // Allow empty input or Standard integer regex: -123 or 123
        return (
          this._utils.isEmpty(element.value) || /^-?\d+$/.test(element.value)
        );
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("integer", element);
      },
    },
    digits: {
      handler: (element: any, digits: any) => {
        // Allow empty input or check if the value is exactly the specified number of digits
        return (
          this._utils.isEmpty(element.value) ||
          new RegExp(`^\\d{${digits}}$`).test(element.value)
        );
      },
      message: (element: any, message = "", digits: any) => {
        return (message || this.getErrorMessage("digits", element)).replace(
          ":digits",
          digits
        );
      },
    },
    digits_between: {
      handler: (element: any, min: any, max: any) => {
        // Allow empty input or check if the value is between the specified range of digits
        return (
          this._utils.isEmpty(element.value) ||
          new RegExp(`^\\d{${min},${max}}$`).test(element.value)
        );
      },
      message: (element: any, message = "", min: any, max: any) => {
        return (message || this.getErrorMessage("digits_between", element))
          .replace(":min", min)
          .replace(":max", max);
      },
    },
    alpha: {
      handler: (element: any) => {
        // Allow empty input or Standard alpha regex: a-zA-Z
        return (
          this._utils.isEmpty(element.value) ||
          /^[a-zA-Z]+$/.test(element.value)
        );
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("alpha", element);
      },
    },
    alpha_num: {
      handler: (element: any) => {
        // Allow empty input or Standard alpha numeric regex: a-zA-Z0-9
        return (
          this._utils.isEmpty(element.value) ||
          /^[a-zA-Z0-9]+$/.test(element.value)
        );
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("alpha_num", element);
      },
    },
    alpha_dash: {
      handler: (element: any) => {
        // Allow empty input or Standard alpha dash regex: a-zA-Z0-9_-
        return (
          this._utils.isEmpty(element.value) ||
          /^[a-zA-Z0-9_-]+$/.test(element.value)
        );
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("alpha_dash", element);
      },
    },
    url: {
      handler: (element: any) => {
        // Allow empty input or Standard URL regex: http(s)://www.example.com
        if (this._utils.isEmpty(element.value)) return true;

        try {
          new URL(element.value);
          return true;
        } catch {
          return false;
        }
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("url", element);
      },
    },
    date: {
      handler: (element: any, format = "YYYY-MM-DD") => {
        // Allow empty input
        if (this._utils.isEmpty(element.value)) return true;

        // Check format is true or not
        format = format === "true" ? "YYYY-MM-DD" : format;

        const parseDate = this._utils.parseDate(element.value, format);
        if (!parseDate || isNaN(parseDate.date.getTime())) return false;

        // Check if the date is valid
        const { year, month, day, date } = parseDate;

        const isValidDate =
          date.getFullYear() === year &&
          date.getMonth() + 1 === month &&
          date.getDate() === day;
        // Check if the date is valid
        return isValidDate;
      },
      message: (element: any, message = "", format = "YYYY-MM-DD") => {
        format = format === "true" ? "YYYY-MM-DD" : format;
        return (message || this.getErrorMessage("date", element)).replace(
          ":format",
          format
        );
      },
    },
    date_between: {
      handler: (
        element: any,
        minDate: any,
        maxDate: any,
        format = "YYYY-MM-DD"
      ) => {
        // Allow empty input
        if (this._utils.isEmpty(element.value)) return true;

        // Parse input date
        const parsed = this._utils.parseDate(element.value, format);
        if (!parsed || isNaN(parsed.date.getTime())) return false;

        const inputTime = parsed.date.getTime();

        // Parse min and max
        const minParsed = this._utils.parseDate(minDate);
        const maxParsed = this._utils.parseDate(maxDate);
        if (!minParsed || !maxParsed) return false;

        const minTime = minParsed.date.getTime();
        const maxTime = maxParsed.date.getTime();

        return inputTime >= minTime && inputTime <= maxTime;
      },
      message: (
        element: any,
        message = "",
        minDate: any,
        maxDate: any,
        format = "YYYY-MM-DD"
      ) => {
        return (message || this.getErrorMessage("date_between", element))
          .replace(":min", minDate)
          .replace(":max", maxDate)
          .replace(":format", format);
      },
    },
    date_before: {
      handler: (element: any, date: any, format = "YYYY-MM-DD") => {
        // Allow empty input
        if (this._utils.isEmpty(element.value)) return true;

        const inputDate = this._utils.parseDate(element.value, format);
        if (!inputDate || isNaN(inputDate.date.getTime())) return false;

        const compareDate = this._utils.getComparisonDate(date);
        if (!compareDate || isNaN(compareDate.getTime())) return false;

        // Check if inputDate is strictly before compareDate
        return inputDate.date.getTime() < compareDate.getTime();
      },
      message: (
        element: any,
        message = "",
        date: any,
        format = "YYYY-MM-DD"
      ) => {
        return (message || this.getErrorMessage("date_before", element))
          .replace(":date", date)
          .replace(":format", format);
      },
    },
    before_or_equal: {
      handler: (element: any, date: any, format = "YYYY-MM-DD") => {
        // Allow empty input
        if (this._utils.isEmpty(element.value)) return true;

        const inputDate = this._utils.parseDate(element.value, format);
        if (!inputDate || isNaN(inputDate.date.getTime())) return false;

        const compareDate = this._utils.getComparisonDate(date);
        if (!compareDate || isNaN(compareDate.getTime())) return false;

        // Check if inputDate is before or equal to compareDate
        return inputDate.date.getTime() <= compareDate.getTime();
      },
      message: (
        element: any,
        message = "",
        date: any,
        format = "YYYY-MM-DD"
      ) => {
        return (message || this.getErrorMessage("before_or_equal", element))
          .replace(":date", date)
          .replace(":format", format);
      },
    },
    date_after: {
      handler: (element: any, date: any, format = "YYYY-MM-DD") => {
        // Allow empty input
        if (this._utils.isEmpty(element.value)) return true;

        const inputDate = this._utils.parseDate(element.value, format);
        if (!inputDate || isNaN(inputDate.date.getTime())) return false;

        const compareDate = this._utils.getComparisonDate(date);
        if (!compareDate || isNaN(compareDate.getTime())) return false;

        // Check if inputDate is strictly after compareDate
        return inputDate.date.getTime() > compareDate.getTime();
      },
      message: (
        element: any,
        message = "",
        date: any,
        format = "YYYY-MM-DD"
      ) => {
        return (message || this.getErrorMessage("date_after", element))
          .replace(":date", date)
          .replace(":format", format);
      },
    },
    after_or_equal: {
      handler: (element: any, date: any, format = "YYYY-MM-DD") => {
        // Allow empty input
        if (this._utils.isEmpty(element.value)) return true;

        const inputDate = this._utils.parseDate(element.value, format);
        if (!inputDate || isNaN(inputDate.date.getTime())) return false;

        const compareDate = this._utils.getComparisonDate(date);
        if (!compareDate || isNaN(compareDate.getTime())) return false;

        // Check if inputDate is after or equal to compareDate
        return inputDate.date.getTime() >= compareDate.getTime();
      },
      message: (
        element: any,
        message = "",
        date: any,
        format = "YYYY-MM-DD"
      ) => {
        return (message || this.getErrorMessage("after_or_equal", element))
          .replace(":date", date)
          .replace(":format", format);
      },
    },
    date_format: {
      handler: (element: any, format: string) => {
        // Allow empty input
        if (this._utils.isEmpty(element.value)) return true;

        const parseDate = this._utils.parseDate(element.value, format);
        if (!parseDate || isNaN(parseDate.date.getTime())) return false;

        const { year, month, day, date } = parseDate;

        const isValidDate =
          date.getFullYear() === year &&
          date.getMonth() + 1 === month &&
          date.getDate() === day;

        return isValidDate;
      },
      message: (element: any, message = "", format: string) => {
        return (
          message || this.getErrorMessage("date_format", element)
        ).replace(":format", format);
      },
    },
    json: {
      handler: (element: any) => {
        // Allow empty input or check if the value is valid JSON
        if (this._utils.isEmpty(element.value)) return true;

        try {
          const parsed = JSON.parse(element.value.trim());
          return typeof parsed === "object";
        } catch {
          return false;
        }
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("json", element);
      },
    },
    ip: {
      handler: (element: any, version = "all") => {
        // Allow empty input or check if the value is a valid IP address
        if (this._utils.isEmpty(element.value)) return true;

        // Check version is true or not
        version = version === "true" ? "all" : version;

        const ipv4 =
          /^(25[0-5]|2[0-4]\d|1?\d{1,2})(\.(25[0-5]|2[0-4]\d|1?\d{1,2})){3}$/;
        const ipv6 =
          /^(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$|^::(?:[a-fA-F0-9]{1,4}:){0,6}[a-fA-F0-9]{1,4}$/;

        if (version === "all") {
          return ipv4.test(element.value) || ipv6.test(element.value);
        }
        if (version === "v4") {
          return ipv4.test(element.value);
        }
        if (version === "v6") {
          return ipv6.test(element.value);
        }
        return false;
      },
      message: (element: any, message = "", version = "all") => {
        version = version === "true" ? "all" : version;
        if (version === "all") {
          version = "IP";
        } else if (version === "v4") {
          version = "IPv4";
        } else if (version === "v6") {
          version = "IPv6";
        }
        return (message || this.getErrorMessage("ip", element)).replace(
          ":version",
          version
        );
      },
    },
    contains: {
      handler: (element: any, value: string) => {
        // Allow empty input or check if the value contains the specified value
        return (
          this._utils.isEmpty(element.value) || element.value.includes(value)
        );
      },
      message: (element: any, message = "", value: string) => {
        return (message || this.getErrorMessage("contains", element)).replace(
          ":contains",
          value
        );
      },
    },
    boolean: {
      handler: (element: any) => {
        // Check if value is empty or is a boolean
        return (
          this._utils.isEmpty(element.value) ||
          ["true", "false", "1", "0"].includes(element.value)
        );
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("boolean", element);
      },
    },
    minlength: {
      handler: (element: any, length: any) => {
        // Allow empty input or check if the value is at least the specified length
        return (
          this._utils.isEmpty(element.value) || element.value.length >= length
        );
      },
      message: (element: any, message = "", length: any) => {
        return (message || this.getErrorMessage("minlength", element)).replace(
          ":length",
          length
        );
      },
    },
    maxlength: {
      handler: (element: any, length: any) => {
        // Allow empty input or check if the value is at most the specified length
        return (
          this._utils.isEmpty(element.value) || element.value.length <= length
        );
      },
      message: (element: any, message = "", length: any) => {
        return (message || this.getErrorMessage("maxlength", element)).replace(
          ":length",
          length
        );
      },
    },
    starts_with: {
      handler: (element: any, ...prefixes: string[]) => {
        // Allow empty input or check if the value starts with any of the specified prefixes
        return (
          this._utils.isEmpty(element.value) ||
          prefixes.some((prefix) => element.value.startsWith(prefix))
        );
      },
      message: (element: any, message = "", ...prefixes: string[]) => {
        return (
          message || this.getErrorMessage("starts_with", element)
        ).replace(":prefixes", prefixes.join(", "));
      },
    },
    ends_with: {
      handler: (element: any, ...suffixes: string[]) => {
        // Allow empty input or check if the value ends with any of the specified suffixes
        return (
          this._utils.isEmpty(element.value) ||
          suffixes.some((suffix) => element.value.endsWith(suffix))
        );
      },
      message: (element: any, message = "", ...suffixes: string[]) => {
        return (message || this.getErrorMessage("ends_with", element)).replace(
          ":suffixes",
          suffixes.join(", ")
        );
      },
    },
    in: {
      handler: (element: any, ...values: string[]) => {
        // Allow empty input or check if the value is in the specified values
        return (
          this._utils.isEmpty(element.value) || values.includes(element.value)
        );
      },
      message: (element: any, message = "", ...values: string[]) => {
        return (message || this.getErrorMessage("in", element)).replace(
          ":values",
          values.join(", ")
        );
      },
    },
    not_in: {
      handler: (element: any, ...values: string[]) => {
        // Allow empty input or check if the value is not in the specified values
        return (
          this._utils.isEmpty(element.value) || !values.includes(element.value)
        );
      },
      message: (element: any, message = "", ...values: string[]) => {
        return (message || this.getErrorMessage("not_in", element)).replace(
          ":values",
          values.join(", ")
        );
      },
    },
    same: {
      handler: (element: any, field: string) => {
        // Check if the value is the same as the specified field
        const sameField = this.getElement(field);
        if (sameField == null) {
          return false;
        }
        return element.value === sameField.value;
      },
      message: (element: any, message = "", field: string) => {
        const other = this._utils.getLabelText(field);
        return (message || this.getErrorMessage("same", element)).replace(
          ":other",
          other
        );
      },
    },
    pattern: {
      handler: (element: any, pattern: string) => {
        // Allow empty input or check if the value matches the specified pattern
        return (
          this._utils.isEmpty(element.value) ||
          new RegExp(pattern).test(element.value)
        );
      },
      message: (element: any, message = "", pattern: string) => {
        return (message || this.getErrorMessage("pattern", element)).replace(
          ":pattern",
          pattern
        );
      },
    },
    regex: {
      handler: (element: any, pattern: string) => {
        // Allow empty input or check if the value matches the specified regex pattern - remove slashes from regex
        return (
          this._utils.isEmpty(element.value) ||
          new RegExp(pattern.replace(/^\/|\/$/g, "")).test(element.value)
        );
      },
      message: (element: any, message = "", pattern: string) => {
        return (message || this.getErrorMessage("regex", element)).replace(
          ":pattern",
          pattern
        );
      },
    },
    not_regex: {
      handler: (element: any, pattern: string) => {
        // Allow empty input or check if the value does not match the specified regex pattern - remove slashes from regex
        return (
          this._utils.isEmpty(element.value) ||
          !new RegExp(pattern.replace(/^\/|\/$/g, "")).test(element.value)
        );
      },
      message: (element: any, message = "", pattern: string) => {
        return (message || this.getErrorMessage("not_regex", element)).replace(
          ":pattern",
          pattern
        );
      },
    },
    min: {
      handler: (element: any, min: any) => {
        // Allow empty input or check if the value is at least the specified min value

        // Handle checkbox or radio group
        if (element.type === "checkbox" || element.type === "radio") {
          const inputs = document.getElementsByName(element.name);
          return (
            Array.from(inputs).filter(
              (input) => (input as HTMLInputElement).checked
            ).length >= min
          );
        }

        // Handle select
        if (element.tagName === "SELECT") {
          return Array.from(element.selectedOptions || []).length >= min;
        }

        // Handle file input
        if (element.type === "file") {
          return element.files.length >= min;
        }

        return (
          this._utils.isEmpty(element.value) || parseFloat(element.value) >= min
        );
      },
      message: (element: any, message = "", min: any) => {
        return (message || this.getErrorMessage("min", element)).replace(
          ":min",
          min
        );
      },
    },
    max: {
      handler: (element: any, max: any) => {
        // Allow empty input or check if the value is at most the specified max value

        // Handle checkbox or radio group
        if (element.type === "checkbox" || element.type === "radio") {
          const inputs = document.getElementsByName(element.name);
          return (
            Array.from(inputs).filter(
              (input) => (input as HTMLInputElement).checked
            ).length <= max
          );
        }

        // Handle select
        if (element.tagName === "SELECT") {
          return Array.from(element.selectedOptions || []).length <= max;
        }

        // Handle file input
        if (element.type === "file") {
          return element.files.length <= max;
        }

        return (
          this._utils.isEmpty(element.value) || parseFloat(element.value) <= max
        );
      },
      message: (element: any, message = "", max: any) => {
        return (message || this.getErrorMessage("max", element)).replace(
          ":max",
          max
        );
      },
    },
    between: {
      handler: (element: any, min: any, max: any) => {
        // Allow empty input or check if the value is between the specified min and max values

        // Handle checkbox or radio group
        if (element.type === "checkbox" || element.type === "radio") {
          const inputs = document.getElementsByName(element.name);
          const checked = Array.from(inputs).filter(
            (input) => (input as HTMLInputElement).checked
          ).length;
          return checked >= min && checked <= max;
        }
        // Handle select
        if (element.tagName === "SELECT") {
          const selected = Array.from(element.selectedOptions || []).length;
          return selected >= min && selected <= max;
        }

        // Handle file input
        if (element.type === "file") {
          return element.files.length >= min && element.files.length <= max;
        }

        return (
          this._utils.isEmpty(element.value) ||
          (parseFloat(element.value) >= min && parseFloat(element.value) <= max)
        );
      },
      message: (element: any, message = "", min: any, max: any) => {
        return (message || this.getErrorMessage("between", element))
          .replace(":min", min)
          .replace(":max", max);
      },
    },
    size: {
      handler: (element: any, size: any) => {
        // Allow empty or check if the file size is equal to the specified size
        if (element.files.length === 0) return true;
        const expectedSize = parseFloat(size); // in KB
        for (let i = 0; i < element.files.length; i++) {
          const sizeInKB = parseFloat(
            (element.files[i].size / 1024).toFixed(2)
          );
          if (sizeInKB !== expectedSize) {
            return false;
          }
        }
        return true;
      },
      message: (element: any, message = "", size: any) => {
        return (message || this.getErrorMessage("size", element)).replace(
          ":size",
          size
        );
      },
    },
    min_size: {
      handler: (element: any, size: any) => {
        // Allow empty or check if the file size is greater than or equal to the specified size
        if (element.files.length === 0) return true;
        const minSize = parseFloat(size); // in KB
        for (let i = 0; i < element.files.length; i++) {
          const sizeInKB = parseFloat(
            (element.files[i].size / 1024).toFixed(2)
          );
          if (sizeInKB < minSize) {
            return false;
          }
        }
        return true;
      },
      message: (element: any, message = "", size: any) => {
        return (message || this.getErrorMessage("min_size", element)).replace(
          ":size",
          size
        );
      },
    },
    max_size: {
      handler: (element: any, size: any) => {
        // Allow empty or check if the file size is less than or equal to the specified size
        if (element.files.length === 0) return true;
        const maxSize = parseFloat(size); // in KB
        for (let i = 0; i < element.files.length; i++) {
          const sizeInKB = parseFloat(
            (element.files[i].size / 1024).toFixed(2)
          );
          if (sizeInKB > maxSize) {
            return false;
          }
        }
        return true;
      },
      message: (element: any, message = "", size: any) => {
        return (message || this.getErrorMessage("max_size", element)).replace(
          ":size",
          size
        );
      },
    },
    between_size: {
      handler: (element: any, min: any, max: any) => {
        // Allow empty or check if the file size is between the specified min and max values
        if (element.files.length === 0) return true;
        const minSize = parseFloat(min); // in KB
        const maxSize = parseFloat(max); // in KB
        for (let i = 0; i < element.files.length; i++) {
          const sizeInKB = parseFloat(
            (element.files[i].size / 1024).toFixed(2)
          );
          if (sizeInKB < minSize || sizeInKB > maxSize) {
            return false;
          }
        }
        return true;
      },
      message: (element: any, message = "", min: any, max: any) => {
        return (message || this.getErrorMessage("between_size", element))
          .replace(":min", min)
          .replace(":max", max);
      },
    },
    mimes: {
      handler: (element: any, ...allowedExts: string[]) => {
        // Allow empty or check if the file type is in the allowed extensions
        if (element.files.length === 0) return true;

        const allowedMimes = this._utils.getMimeType(allowedExts);
        for (let i = 0; i < element.files.length; i++) {
          if (!allowedMimes.includes(element.files[i].type)) {
            return false;
          }
        }
        return true;
      },
      message: (element: any, message = "", ...mimes: string[]) => {
        return (message || this.getErrorMessage("mimes", element)).replace(
          ":values",
          mimes.join(", ")
        );
      },
    },
    uuid: {
      handler: (element: any) => {
        // Allow empty input or check if the value is a valid UUID
        if (this._utils.isEmpty(element.value)) return true;
        const uuidPattern =
          /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return uuidPattern.test(element.value);
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("uuid", element);
      },
    },
    server: {
      handler: async (element: any, url: string, ...args: any[]) => {
        // Allow empty input
        if (this._utils.isEmpty(element.value)) return true;

        // Abort previous request if needed
        if (element._serverAbortController) {
          element._serverAbortController.abort();
        }
        const controller = new AbortController();
        element._serverAbortController = controller;

        const body = new URLSearchParams({ [element.name]: element.value });
        if (args.length > 0) {
          args.forEach((arg, i) => {
            return body.append(i.toString(), arg);
          });
        }

        this._utils.dispatchCustomEvent(element, "validation-loading", {
          url,
          body: body.toString(),
        });
        element.classList.add("validation-loading");
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: body.toString(),
            signal: controller.signal,
          });
          const data = await response.json();
          this._utils.dispatchCustomEvent(element, "validation-success", {
            valid: data.valid,
            url,
            body: body.toString(),
          });
          return data.valid;
        } catch (err: any) {
          if (err.name === "AbortError") return false;
          this._utils.dispatchCustomEvent(element, "validation-error", {
            error: err,
            url,
            body: body.toString(),
          });
          return false;
        } finally {
          this._utils.dispatchCustomEvent(element, "validation-complete", {
            url,
            body: body.toString(),
          });
          element.classList.remove("validation-loading");
          element._serverAbortController = null;
        }
      },
      message: (element: any, message = "") => {
        return message || this.getErrorMessage("server", element);
      },
    },
  };

  constructor(form: string | any = null, options: any = {}) {
    this._options = Object.assign(this._options, options);
    this._form =
      typeof form === "string" ? document.getElementById(form) : form;
    if (!this._form || this._form.tagName !== "FORM") {
      this._form = null;
      return;
    }
  }

  setForm(form: string | any) {
    this._form =
      typeof form === "string" ? document.getElementById(form) : form;
    if (!this._form || this._form.tagName !== "FORM") {
      this._form = null;
      console.error("Invalid form provided.");
      return;
    }
  }

  init() {
    if (!this._form) return;
    this.initFieldSelector();
    this.contextInit(this._form);
  }

  get excludeFieldSyntax() {
    if (this._excludeFieldSyntax) return this._excludeFieldSyntax;
    if (!this._options.excludeField.length) {
      this._excludeFieldSyntax = ["", ""];
      return ["", ""];
    }
    const inputNotSelectors: string[] = [];
    const otherNotSelectors: string[] = [];

    for (const attr of this._options.excludeField) {
      if (attr.startsWith(":")) {
        // Convert :readonly to [readonly]
        const selector =
          attr === ":readonly" ? ":not([readonly])" : `:not(${attr})`;
        inputNotSelectors.push(selector);
        otherNotSelectors.push(selector);
      } else {
        inputNotSelectors.push(`:not([type="${attr}"])`);
      }
    }

    this._excludeFieldSyntax = [
      inputNotSelectors.join(""),
      otherNotSelectors.join(""),
    ];

    return this._excludeFieldSyntax;
  }

  initFieldSelector() {
    if (!this._options.excludeField.length) return;

    const [inputNotSelectors, otherNotSelectors] = this.excludeFieldSyntax;

    this._options.fieldSelector = this._options.fieldSelector
      .split(",")
      .map((field: any) => {
        field = field.trim();
        return (
          field + (field === "input" ? inputNotSelectors : otherNotSelectors)
        );
      })
      .join(", ");
  }

  contextInit(context: HTMLElement) {
    const fields = context.querySelectorAll(this._options.fieldSelector);
    fields.forEach((field) => {
      this.addFieldListeners(field);
      this._fields.push(field);
    });
  }

  addField(field: any) {
    if (!field || !(field instanceof HTMLElement)) {
      console.error("Invalid field provided.");
      return;
    }

    let excludeSyntax = this.excludeFieldSyntax;
    excludeSyntax =
      field.tagName === "INPUT" ? excludeSyntax[0] : excludeSyntax[1];

    if (!field.matches(excludeSyntax)) {
      return;
    }

    // If the field already has listeners, remove them first
    this.removeFieldListeners(field);

    // Add new listeners
    this.addFieldListeners(field);
    this._fields.push(field);
  }

  removeField(field: any) {
    if (this._fields.includes(field)) {
      this.removeFieldListeners(field);
      this._fields = this._fields.filter((f) => f !== field);
    }
  }

  addFieldListeners(field: any) {
    if (!this._debouncedListeners) {
      this._debouncedListeners = new WeakMap();
    }

    const events = ["checkbox", "radio"].includes(field?.type)
      ? ["click", "change"]
      : ["change", "keyup"];

    if (!this._debouncedListeners.has(field)) {
      this._debouncedListeners.set(field, () => {});
    }

    const listenerMap: any = this._debouncedListeners.get(field);

    events.forEach((event) => {
      // If we previously added a listener, remove it
      if (listenerMap[event]) {
        field.removeEventListener(event, listenerMap[event]);
      }

      // Create new listener (debounced if needed)
      const rawListener = async (e: Event) => {
        this.removeFieldError(field);
        const isValid = await this.validateField(field);
        if (!isValid) {
          this.addFieldError(field);
        }
      };
      // If the event is "keyup", debounce the listener
      const finalListener =
        event === "keyup" ? this.debounce(rawListener, 500) : rawListener;

      // Store for future reference/removal
      listenerMap[event] = finalListener;

      // Add listener
      field.addEventListener(event, finalListener);
    });
  }

  removeFieldListeners(field: any) {
    if (!this._debouncedListeners || !this._debouncedListeners.has(field)) {
      return;
    }

    const listenerMap: any = this._debouncedListeners.get(field);
    Object.keys(listenerMap).forEach((event) => {
      field.removeEventListener(event, listenerMap[event]);
    });
    this._debouncedListeners.delete(field);
  }

  // Add your custom validator rule, if it exists, it will be overridden
  addRule(rule: string, handler: any, message: any) {
    if (typeof rule === "string" && typeof handler === "function") {
      this._rules[rule] = { handler, message };
    }
  }

  addRules(rules: Record<string, { handler: any; message?: any }>) {
    if (typeof rules === "object" && rules !== null) {
      for (const [name, rule] of Object.entries(rules)) {
        this.addRule(name, rule.handler, rule?.message || null);
      }
    }
  }

  async validate() {
    this._isvalid = true;

    if (!this._fields || this._fields.length === 0) return false;
    this._isvalidating = true;

    for (const field of this._fields) {
      this.removeFieldError(field);
      const isValid = await this.validateField(field);
      if (!isValid) {
        this._isvalid = false;
        this.addFieldError(field);
      }
    }

    if (!this.isValid) {
      const focusElement = this._form.querySelector(".is-invalid");
      if (focusElement) focusElement.focus();
    }
    this._isvalidating = false;
    return this._isvalid;
  }

  async validateField(field: any) {
    if (!field || !field.checkValidity) return true;
    // Reset validity state
    field.setCustomValidity("");

    // Check if the field is excluded from validation
    for (const rule in field.dataset) {
      if (!this._rules[rule]) continue;
      const args = field.dataset[rule]
        .split("|")
        .map((arg: string) => arg.trim());
      const isValid = await this.executeRule(rule, field, args);
      if (!isValid) {
        const label = this._utils.getLabelText(field);
        const message = this._rules[rule]
          .message(field, field.dataset[`${rule}Message`] || "", ...args)
          .replace(/:field|:attribute/g, label);
        field.setCustomValidity(message);
        return false;
      }
    }

    return true;
  }

  get isValidating(): boolean {
    return this._isvalidating;
  }

  get isValid(): boolean {
    return this._isvalid;
  }

  // Get error message for the specified field
  getErrorMessage(error: string, field: any = null): string {
    if (!error) return "";
    if (!field) {
      return this._errorMessages[error] || "";
    }

    return (
      field.dataset[`${error}Msg`] ||
      field.dataset[`${error}Message`] ||
      field.dataset[`${error}_msg`] ||
      field.dataset[`${error}_message`] ||
      this._errorMessages[error] ||
      ""
    );
  }

  setErrorMessage(error: string, message: string) {
    if (!error || !message) return;
    this._errorMessages[error] = message;
  }

  setErrorMessages(messages: Record<string, string>) {
    if (!messages || typeof messages !== "object") return;
    Object.keys(messages).forEach((key) => {
      this.setErrorMessage(key, messages[key]);
    });
  }

  removeFieldError(field: any) {
    if (!field || !field.classList) return;
    // Check if the field has checkbox or radio group
    const fields =
      field.type === "checkbox" || field.type === "radio"
        ? document.getElementsByName(field.name)
        : [field];
    // Remove error class and custom validity from all related fields
    fields.forEach((input: any) => {
      input.classList.remove("is-invalid");
      input.setCustomValidity("");
      // Remove any error message
      const container = input.closest(".form-check") || null;
      const errorElement = container
        ? container.querySelector(".invalid-feedback")
        : input.nextElementSibling;
      if (errorElement && errorElement.classList.contains("invalid-feedback")) {
        errorElement.remove();
      }
    });
  }

  addFieldError(field: any) {
    if (!field || !field.classList) return;
    field.classList.add("is-invalid");
    const message = field.validationMessage || "Invalid input";

    // Create or update error message element
    const container = field.closest(".form-check") || null; //.form-check, .form-group, .form-control-wrapper
    let errorElement = container
      ? container.querySelector(".invalid-feedback")
      : field.nextElementSibling;

    if (!errorElement || !errorElement.classList.contains("invalid-feedback")) {
      errorElement = document.createElement("span");
      errorElement.className = "invalid-feedback";
      if (container) {
        errorElement.classList.add("d-block");
        container.appendChild(errorElement);
      } else {
        field.parentNode?.insertBefore(errorElement, field.nextSibling);
      }
    }
    errorElement.textContent = message;
  }

  getElement(element: any) {
    return typeof element === "string"
      ? document.getElementById(element) ||
          document.querySelector(`[name="${element}"]`)
      : element;
  }

  debounce(func: Function, delay: number) {
    let timeout: any = null;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  async executeRule(rule: string, element: any, args: any[]) {
    const ruleHandler = this._rules[rule].handler;
    const result = ruleHandler(element, ...args);
    return (result && typeof result.then === "function") ||
      result instanceof Promise
      ? await result
      : result;
  }

  get fields(): HTMLElement[] {
    return this._fields;
  }

  get utils(): any {
    return this._utils;
  }

  get rules(): Record<string, any> {
    return this._rules;
  }

  get errorMessages(): Record<string, string> {
    return this._errorMessages;
  }

  get form(): any | null {
    return this._form;
  }

  get options(): Record<string, any> {
    return this._options;
  }

  getFormData(): FormData | null {
    if (!this._form) return null;
    const formData = new FormData(this._form);
    return formData;
  }
}
