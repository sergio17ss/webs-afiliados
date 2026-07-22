import { Composition } from "remotion";
import { Promo } from "./Promo";
import { PromoAnimado } from "./PromoAnimado";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Promo"
        component={Promo}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PromoAnimado"
        component={PromoAnimado}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
