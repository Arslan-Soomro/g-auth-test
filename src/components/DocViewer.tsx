import { useEffect } from "react";

interface Props {
    fileUrl: string;
}

function DocViewer({ fileUrl } : Props) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    $("#resolte-contaniner").officeToHtml({
      url: fileUrl,
    });
  }, []);

  return (
    <div style={{ width: "600px", height: "600px", marginTop: "20px", overflow: "hidden" }}>
      <div
        id="resolte-contaniner"
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
}

export default DocViewer;
