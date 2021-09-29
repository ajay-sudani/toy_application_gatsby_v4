import * as React from "react";
import { IUserPost } from "../../interfaces/UserPosts";
import * as userPostsStyles from "./UserPosts.module.scss";

export const UserPosts = ({ data }: { data: IUserPost[] }) => {
  return (
    <section>
      <p className={userPostsStyles.postLabel}>User posts</p>
      <div className={userPostsStyles.postsContainer}>
        {data.map((p) => (
          <div key={p.id} className={userPostsStyles.post}>
            <p>
              <b>Title - </b> {p.title}
            </p>
            <p>
              <b>Date - </b> {p.dateAdded}
            </p>
            <p>
              <b>Brief - </b> {p.brief}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
