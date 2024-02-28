import { navbarTranslation } from "./navbar/data";
import { homeTranslation } from "./home/data";
import { footerTranslation } from "./footer/data";
import { settingsTranslation } from "./settings/data";
import { socialsTranslation } from "./socials/data";
import { notfoundTranslation } from "./notfound/data";
import { activitiesTranslation } from "./activities/data";
import { personalHistoryTranslation } from "./personal_history/data";
import { certificatesTranslation } from "./certificates/data";
import { nameModalTranslation } from "./namemodal/data";

export const resources = {
    en: {
        translation: {
            ...navbarTranslation.en,
            ...homeTranslation.en,
            ...footerTranslation.en,
            ...settingsTranslation.en,
            ...socialsTranslation.en,
            ...notfoundTranslation.en,
            ...activitiesTranslation.en,
            ...personalHistoryTranslation.en,
            ...certificatesTranslation.en,
            ...nameModalTranslation.en
        }
    },
    th: {
        translation: {
            ...navbarTranslation.th,
            ...homeTranslation.th,
            ...footerTranslation.th,
            ...settingsTranslation.th,
            ...socialsTranslation.th,
            ...notfoundTranslation.th,
            ...activitiesTranslation.th,
            ...personalHistoryTranslation.th,
            ...certificatesTranslation.th,
            ...nameModalTranslation.th
        }
    }
};
