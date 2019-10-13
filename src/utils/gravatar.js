import md5 from 'md5';

const gravatar = email => {
  const base = 'https://gravatar.com/avatar/';
  const formatterEmail = email.trim().toLowerCase();
  const hash = md5(formatterEmail, { enconding: 'binary' });

  return `${base}${hash}`;
};

export default gravatar;
