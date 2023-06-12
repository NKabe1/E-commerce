import { PropsWithChildren, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { LocaleContext } from "@src/contexts/LocaleContext";
import en from "./translations/en.json";
import ge from "./translations/ge.json";

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<"en" | "ge">(
    (localStorage.getItem("selectedLanguage") as "en" | "ge") || "en"
  );
  const messages = { en, ge };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', locale);
  }, [locale]);

  return (
    <div>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <IntlProvider
          locale="en"
          messages={messages[locale]}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </LocaleContext.Provider>
    </div>
  );
}
