import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['es','en'];
 
export default getRequestConfig(async ({locale}: { locale: string }) => {
  if (!locales.includes(locale)) notFound();
 
  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});