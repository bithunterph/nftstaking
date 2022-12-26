import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Bored Ape Miner NFT Club Collection</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
            <img src={`/icons/mine.gif`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>Mint a new BAM NFT</h2>
            <p className={styles.selectBoxDescription}>
            Mint and Collect our Bored Ape Miner NFT. Click here to mint.
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/stakeme.gif`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Stake your NFT to earn more $BAM Tokens. Click here to Stake NFT.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://bamtoken.club`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/tokenlogo.jpg`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>$BAM Token Website</h2>
          <p className={styles.selectBoxDescription}>
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://tofunft.com/discover/items?contracts=64603`)}
        >
          {/* Staking an NFT */}
          <img src={`/images.png`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Buy and Sell your NFT at TofuNFT</h2>
          <p className={styles.selectBoxDescription}>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
