export interface UserData {
  interests: string[];
  data: {
    city: string; // - город пользователя
    county: null; // - страна пользователя
    about: string; // - текст о пользователе
    sex: string; // - пол пользователя
    name: string; // - имя пользователя
    telegram: string | null; // - телеграм пользователя, пустой не отображаем
    tictok: string | null; // - тикток пользователя, пустой не отображаем
    whatsup: string | null; // - ватсап пользователя, пустой не отображаем
    instagram: string | null; // - инстаграм пользователя, пустой не отображаем
    facebook: string | null; // - фейсбук пользователя, пустой не отображаем
    age: number; // - возраст пользователя
    date_of_birth: string; // - дата рождения пользователя
  };
  images: {
    document_image_1: {
      docfile: string;
    } | null;
    document_image_2: {
      docfile?: string;
    } | null;
    document_image_3: {
      docfile?: string;
    } | null;
  };
}
