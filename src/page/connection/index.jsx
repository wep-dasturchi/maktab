import React from "react";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import useLanguage from "../../hooks/useLanguage";
import { EnvironmentOutlined } from "@ant-design/icons";

const ConnectionPage = () => {
  const { t } = useLanguage();
  return (
    <div className="container">
      <div className="boglanish-container">
        <motion.h2
          className="boglanish-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           {t("contact_section")}
        </motion.h2>

        <motion.p
          className="boglanish-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          className="boglanish-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form className="contact-form">
            <input type="text" placeholder={t("name")} required />
            <input type="email" placeholder={t("emaill")} required />
            <textarea placeholder={t("message")} rows="5" required></textarea>
            <button type="submit">
              <Send size={18} /> {t("send_button")}
            </button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <Phone size={20} /> <a href="tel:+998930651760">+998 93 065 17 60</a>
            </div>
            <div className="info-item">
              <Mail size={20} /> <a>info@maktab.uz</a>
            </div>
            <div className="info-item">
              {/* <MapPin size={20} />{" "} */}
              <a
                href="https://maps.app.goo.gl/zi5fgZY549AoRQQw7"
                target="_blank"
              >
                <EnvironmentOutlined /> {t("location")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectionPage;
