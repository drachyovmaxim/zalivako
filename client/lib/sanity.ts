import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ifs89uni",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
});
