// Structured data (schema.org JSON-LD) for search and answer engines. `<` is escaped so text can never close the tag.
export default function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
