import Image from "next/image";

import postIcon from "@/assets/icons/test.png";
import communityIcon from "@/assets/icons/network.png";
import eventsIcon from "@/assets/icons/community.jpg";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Tech</span>
        </h1>
        <p>Join our community and share your favorite tech post!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <p>Share & discover tech blogs</p>
            <Image src={postIcon} alt="" />
          </li>
          <br />
          <li>
            <p>Find new friends & like-minded people</p>
            <Image src={communityIcon} alt="" />
          </li>
          <br />
          <li>
            <p>Participate in exclusive events</p>
            <Image src={eventsIcon} alt="" />
          </li>
        </ul>
      </main>
    </>
  );
}
