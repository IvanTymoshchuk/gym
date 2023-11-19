import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "../../shared/HText";
import Benefit from "./Benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State of the Art Facilites",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maiores fugiat eos voluptate cumque omnis labore",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "100's of the Diverse Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maiores fugiat eos voluptate cumque omnis labore",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Export and Pro Trainers",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maiores fugiat eos voluptate cumque omnis labore",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            fugiat eos voluptate cumque omnis labore illum a at ad inventore
            non, itaque laboriosam nobis odio exercitationem quidem eum
            reprehenderit facilis.
          </p>
        </div>

        {/* Benefits */}
        <motion.div
          className=" md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
