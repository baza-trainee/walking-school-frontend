export const SocialIcon = (props) => {
  const { href, src, alt } = props;

  return (
    <a href={href}>
      <img src={src} alt={alt} />
    </a>
  );
};
