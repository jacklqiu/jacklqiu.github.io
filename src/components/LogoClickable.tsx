import React from "react";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function LogoClickable({
  imagePath,
  altDescription,
  link,
}: {
  imagePath: string;
  altDescription: string;
  link: string;
}) {
  return (
    <a href={link}>
      <img src={imagePath} alt={altDescription} width={30} />{" "}
    </a>
  );
}
