import { useState } from "react";
import { Form, Accordion } from "react-bootstrap";
import CheckBox from "@/components/core/checkbox/checkbox";
import "@/components/Filters/filter.scss";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

interface FilterSection {
  title: string;
  searchEnabled: boolean;
  data: string[];
}

interface FilterPartProps {
  filterSections: FilterSection[];
}

export default function FilterPart({ filterSections }: FilterPartProps) {
  const [searchTerms, setSearchTerms] = useState(filterSections.map(() => ""));
  const [activeKeys, setActiveKeys] = useState<string[]>(["0"]); // controlled state

  const handleSearchChange = (index: number, value: string) => {
    const updatedSearchTerms = [...searchTerms];
    updatedSearchTerms[index] = value;
    setSearchTerms(updatedSearchTerms);
  };

  const toggleAccordion = (key: string) => {
    setActiveKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  return (
    <div className="FilterPart">
      <div className="d-flex flex-wrap justify-content-between align-items-center HeadingBox ResultTopPart mb-3">
        <h3 className="font30 font700 mb-0">Filters</h3>
        <button className="ClearBtn">
          <span className="bi bi-x-lg"></span>Clear All
        </button>
      </div>

      <Accordion activeKey={activeKeys} alwaysOpen>
        {filterSections.map((section, i) => {
          const filteredData = section.searchEnabled
            ? section.data.filter((item) =>
                item.toLowerCase().includes(searchTerms[i].toLowerCase())
              )
            : section.data;

          return (
            <Accordion.Item eventKey={i.toString()} key={i}>
              <Accordion.Header onClick={() => toggleAccordion(i.toString())}>
                <h3 className="font20 font700 CheckBoxHeading mb-0">
                  {section.title}
                </h3>
              </Accordion.Header>

              <Accordion.Body>
                {section.searchEnabled && (
                  <Form.Control
                    type="text"
                    value={searchTerms[i]}
                    onChange={(e) => handleSearchChange(i, e.target.value)}
                    className="FilterSearch"
                  />
                )}

                {/* <div className=""> */}
                <SimpleBar
                  className="CheckBoxGroup"
                >
                  {filteredData.length > 0 ? (
                    filteredData.map((item, idx) => (
                      <CheckBox
                        key={`${i}-${idx}`}
                        label={item}
                        id={`checkbox-${i}-${idx}`}
                      />
                    ))
                  ) : (
                    <p>No results found.</p>
                  )}
                </SimpleBar>
                {/* </div> */}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
