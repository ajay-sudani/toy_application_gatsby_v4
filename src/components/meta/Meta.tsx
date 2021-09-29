import React from "react";
import Helmet from "react-helmet";

interface IMeta {
  title: string;
  description?: string;
  image?: string;
}

const Meta: React.FC<IMeta> = ({ description, image, title }) => (
  <Helmet
    title={title}
    htmlAttributes={{
      lang: "en",
    }}
  >
    {description && <meta name="description" content={description} />}
    {image && <meta content={image} />}
  </Helmet>
);

export default Meta;
