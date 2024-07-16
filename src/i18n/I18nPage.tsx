import React from "react";
import { useTranslation } from "react-i18next";
import './i18n'; // Import the i18n configuration

/**
 * I18nPage Component
 * Demonstrates the use of react-i18next for internationalization
 * in a React application.
 *
 * npm install react-i18next i18next
 * @constructor
 */
export const I18nPage: React.FC = () => {
    // Destructure t (translation function) and i18n (i18next instance) from useTranslation hook
    const { t, i18n } = useTranslation();

    // Function to change the language
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng).then(r => null); // Change the language and handle the promise
    }

    return (
        <div className="p-8"> {/* Apply padding using Tailwind CSS */}
            {/* Display the translated welcome message */}
            <h1 className="text-2xl font-bold">
                {t("welcome")}
            </h1>
            {/* Display the translated description */}
            <p>{t("description")}</p>

            <div className="mt-4"> {/* Apply margin-top using Tailwind CSS */}
                {/* Button to switch to English language */}
                <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => changeLanguage("en")}>
                    English
                </button>
                {/* Button to switch to French language */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => changeLanguage("fr")}>
                    Français
                </button>
            </div>
        </div>
    );
}
