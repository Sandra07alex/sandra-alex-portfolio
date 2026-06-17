import { useEffect } from "react";

import { Scrapbook } from "@/components/leadership/Scrapbook";

const Leadership = () => {
  useEffect(() => {
    document.title = "Beyond Code — Building Communities, Leading People";
  }, []);

  return <Scrapbook />;
};

export default Leadership;