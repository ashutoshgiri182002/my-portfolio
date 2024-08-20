import { BIO } from "../constants"
import { motion } from "framer-motion"

const Bio = () => {
  return (

    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl lg:text-4xl"> Bio</motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {BIO.map((bio, index) => (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay : index* 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index} className="mb-4 text-lg lg:text-xl" style={{ textAlign: 'justify' }}>
            {bio}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}

export default Bio
