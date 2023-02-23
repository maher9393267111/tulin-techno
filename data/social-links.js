export const companyName = 'Tuline Technology';
export const companyPhone = '(647)-762-3958'
export const companyLadaPhone = '+90 501 244 48 88';
export const hrefLinkPhone = 'tel:+' + companyLadaPhone;
export const companyEmail = 'info@tuline.tech';
export const hrefLinkEmail = 'mailto:' + companyEmail;

const waMessage = "Hello!%20I%20want%20to%20get%20info%20about%20Golden%20movers'%20services";
export const whatsappLink = "https://wa.me/" + companyLadaPhone + "?text=" + waMessage;
export const whatsapp = <a href={whatsappLink} target="_blank"></a>