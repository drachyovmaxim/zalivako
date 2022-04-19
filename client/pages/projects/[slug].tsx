import React, { useCallback } from "react";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import classNames from "embla-carousel-class-names";

import sanity from "@lib/sanity";
import type { Project as ProjectType } from "@interfaces/project";
import DynamicMeta from "@components/dynamic_meta";
import TextParser from "@components/text_parser";
import styles from "@styles/project.module.scss";
import imageUrlFor from "@lib/image_url_for";

interface Props {
  project: ProjectType;
}

const projectsQuery = `*[_type == 'work' && defined(slug.current)][].slug.current`;

const singleProjectQuery = `*[_type == 'work' && slug.current == $slug][0] {
  title,
  content[] {
    _type == 'empty' => {
      _type,
    },
    _type == 'video' => {
      _type,
      "videoURL": asset->url,
    },
    _type == 'audio' => {
      _type,
      "audioURL": asset->url,
    },
    _type == 'image' => {
      ...,
    },
    _type == 'blockText' => {
      ...
    },
  },
  text,
}
`;

export const getStaticPaths = async () => {
  const data = await sanity.fetch(projectsQuery);
  const paths = data.map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.toString();
  const project = await sanity.fetch(singleProjectQuery, {
    slug,
  });

  return {
    props: {
      project,
    },
    revalidate: 30,
  };
};

const ImageItem = ({ image }: { image: { alt: string } }) => {
  return (
    <Image
      src={imageUrlFor(image).url()}
      layout="fill"
      objectFit="contain"
      alt={image.alt}
    />
  );
};

const Project: NextPage<Props> = ({ project }) => {
  const { title, text, content } = project;
  const options = { dragging: "isDragging" };
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
    },
    [classNames(options)]
  );
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <>
      <DynamicMeta title={title} />

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            {content.length == 1 ? (
              content?.map((item, index) => {
                return (
                  <div className={styles["single-wrapper"]} key={index}>
                    {item._type == "image" && (
                      <div className={styles["image-wrapper"]}>
                        <ImageItem image={item} />
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className={styles["slider-container"]}>
                <div className={styles.slider} ref={viewportRef}>
                  <div className={styles["slider-wrapper"]}>
                    {content?.map((item, index) => {
                      return (
                        <div key={index} className={styles.slide}>
                          <div className={styles["slide-wrapper"]}>
                            {item._type == "image" && (
                              <div className={styles["image-wrapper"]}>
                                <ImageItem image={item} />
                              </div>
                            )}
                            {item._type == "video" && (
                              <div className={styles["video-wrapper"]}>
                                <video controls>
                                  <source
                                    src={item.videoURL}
                                    type="video/mp4"
                                  />
                                </video>
                              </div>
                            )}
                            {item._type == "audio" && (
                              <div className={styles["audio-wrapper"]}>
                                <audio controls src={item.audioURL}>
                                  Your browser does not support the
                                  <code>audio</code> element.
                                </audio>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.arrows}>
                  <div
                    onClick={scrollPrev}
                    className={[styles.arrow, styles.left].join(" ")}
                  >
                    <div className={styles.cirqle}>
                      <Image
                        src={"/arrow-left.svg"}
                        width={32}
                        height={32}
                        alt="Slide left"
                      />
                    </div>
                  </div>
                  <div
                    onClick={scrollNext}
                    className={[styles.arrow, styles.right].join(" ")}
                  >
                    <div className={styles.cirqle}>
                      <Image
                        src={"/arrow-right.svg"}
                        width={32}
                        height={32}
                        alt="Slide right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <TextParser data={text} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
