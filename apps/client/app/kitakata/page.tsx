import Image from "next/image";
import "./page.css";

const KitakataPage = () => {
  return (
    <div className="frame">
      <h1 className="heading h1">会津・喜多方旅行記（前編）</h1>
      <p className="paragraph">
        福島県喜多方市に行ってきました。喜多方には小学校に上がる前に少しだけ住んでいました。ルーツたどりを兼ねた旅行です。
      </p>
      <p className="paragraph">
        いろいろ用事があったので出発は15:30くらいになりました。旅行としてはいささか遅い出発です。
        「なすの」という新幹線に乗ってまずは郡山を目指します。
      </p>

      <div>
        <Image
          className="image"
          src="/image/ticket.jpeg"
          fill
          alt="郡山行きの切符"
        />
        <div className="caption">郡山行きの切符</div>
      </div>

      <p className="paragraph">
        新幹線に揺られること一時間半，無事郡山に到着しました。郡山駅は意外なことにとても大きな駅でした。後で知ったことですが，郡山は福島で一番の都会で，東北全域でも仙台に次ぐ都市のようです。
      </p>

      <div>
        <Image
          className="image"
          src="/image/koriyama.jpeg"
          fill
          alt="郡山駅西口"
        />
        <div className="caption">郡山駅西口</div>
      </div>

      <div>
        <Image
          className="image"
          src="/image/koriyama-ave.jpeg"
          fill
          alt="駅前の大通り"
        />
        <div className="caption">駅前の大通り</div>
      </div>

      <p className="paragraph">
        郡山も散策したいところですが，今日中に会津若松についておかないと明日がきついので，名残惜しくも郡山を後にします。
      </p>
      <p className="paragraph">
        郡山から会津若松までは磐越西線という路線で向かいます。一時間に約一本の二両編成という，東京の人間からするとちょっと不便な路線ではありますが，それでも座れる程度の混み具合なので仕方ないといったところでしょうか。
      </p>
      <p className="paragraph">
        会津若松までは磐越西線で1時間15分程度かかります。車窓でも眺めながら到着を待とうと思いましたが，どうも山の中を走っているらしく，外は真っ暗で何も見えません。代わりにGoogle Mapで暇を潰します。
      </p>

      <div>
        <Image
          className="image"
          src="/image/inawashiro.jpeg"
          fill
          alt="猪苗代湖の横を通る磐越西線"
        />
        <div className="caption">猪苗代湖の横を通る磐越西線</div>
      </div>

      <p className="paragraph">
        東京を出て3時間強，ようやく会津若松駅につきました。電車を降りるとまずは会津若松地域のマスコットキャラ「あかべぇ」が出迎えてくれます。
      </p>

      <div>
        <Image
          className="image"
          src="/image/akabee.jpeg"
          fill
          alt="あかべぇがお出迎え"
        />
        <div className="caption">あかべぇがお出迎え</div>
      </div>

      <p className="paragraph">
        駅を出ればすぐに，歴史的に有名な「白虎隊」の銅像があります。この銅像が一体に何を見つめているのか，私は少しだけ気になりました。
      </p>

      <div>
        <Image
          className="image"
          src="/image/sta.jpeg"
          fill
          alt="会津若松駅"
        />
        <div className="caption">会津若松駅</div>
      </div>
      <div>
        <Image
          className="image"
          src="/image/byakkotai.jpeg"
          fill
          alt="彼方を見つめる白虎隊"
        />
        <div className="caption">彼方を見つめる白虎隊</div>
      </div>

      <p className="paragraph">
        郡山と比べると会津若松駅はやはり少しこじんまりとした印象を受けますが，それでも中には土産屋や飲食店，さらには自動改札も備えた現代的な駅舎になっています。東北の駅百選にも選ばれているとかなんとか。
      </p>

      <p className="paragraph">
        当初の予定では，この後一度喜多方駅まで行く予定でしたが，電車の都合でその日の到達は諦めてホテルに泊まります。宿は駅近で安い東横インです。学割だなんだといって6,000円で泊まれました。ありがたい。
      </p>

      <p className="paragraph">
        ホテルに閉じこもっておくのももったいないので，辺りを少し散策しました。散策しはしましたが，碌なものは見つけられませんでした。会津の観光名所といえば鶴ヶ城ですが，時間も遅く立ち入ることは叶いませんでした。ただ一つだけ目を引くものを見つけました。会津の大通りに煌々と輝く赤い塔です。普通に何かの電波塔なんでしょうけど，本当に真っ赤に輝いていて，一瞥してその異様さに慄きました。
      </p>

      <div>
        <Image
          className="image"
          src="/image/red-tower.jpeg"
          fill
          alt="煌々と輝く赤い塔"
        />
        <div className="caption">煌々と輝く赤い塔</div>
      </div>

      <p className="paragraph">
        この後ポケモンのマンホールを探したり，バスでSuicaが使えなくて困ったり，道がわからず遭難しかけたりしましたが，スマホの充電が切れていて写真はありません。電車移動が長くとても疲れましたが，走り出しは順調な一日目でした。後編に続けたいです。
      </p>

      <footer className="footer"/>
    </div>
  );
};

export default KitakataPage;
