/* eslint-disable camelcase, object-curly-newline, react/no-danger, react/no-array-index-key */
import "./scss/Post.scss";
import React, { Component } from "react";
import classNames from "classnames";

class Post extends Component {
  render() {
    const {
      caption,
      id,
      tags,
      photos,
      player,
      photoset_layout,
      maximize,
    } = this.props;
    const postClass = classNames("Post");

    const layout = photoset_layout
      ? photoset_layout.split("").map(parseFloat)
      : [1];
    const width = Math.max(...layout);
    const columns = layout
      .map((rowitems) =>
        new Array(rowitems)
          .fill("")
          .map((e, i) => `${i + 1} / span ${width - rowitems + 1}`)
      )
      .reduce((acc, curr) => acc.concat(...curr), []);

    return (
      <div
        className={postClass}
        style={{
          gridTemplateColumns:
            width === 1 ? "100%" : width === 2 ? "50% 50%" : "33% 33% 33%",
        }}
      >
        {photos &&
          photos.map(({ alt_sizes, original_size }, index) => (
            <img
              style={{ gridColumn: columns[index] }}
              key={original_size.url}
              src={alt_sizes[0].url}
              onClick={() => maximize(photos, index)}
            />
          ))}
        {player && (
          <div
            dangerouslySetInnerHTML={{
              __html: player.slice().pop().embed_code,
            }}
          />
        )}
        {(caption || id) && (
          <p
            className="caption"
            dangerouslySetInnerHTML={{ __html: caption || id }}
          />
        )}
        {tags.length > 0 && (
          <p className="tags">
            {tags.reduce((acc, curr) => `${acc} #${curr}`, "")}
          </p>
        )}
      </div>
    );
  }
}

export default Post;
