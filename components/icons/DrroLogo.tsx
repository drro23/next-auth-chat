
interface ILogoProps {
    className: string,
} 

export default function DrroLogo(props: ILogoProps) {
  return (
    <svg
      className={props.className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5118 6.64061L11.6983 20.2004C12.2095 21.6867 14.2983 21.5364 14.5837 20.0962L14.9365 7.8734C14.9365 7.8734 14.9552 3.39432 19.1469 6.56073C21.4684 8.31443 31.094 16.5008 24.869 24.0371C20.7472 29.0273 13.9373 34.8144 10.1623 37.8958C8.67219 39.1121 9.74563 41.0318 12.191 39.2844C16.5594 36.163 30.359 25.6309 30.5134 19.5162C30.7114 11.6744 18.8301 0.0146484 14.14 0.0146484C11.3131 0.0146484 11.5118 6.64059 11.5118 6.64059L11.5118 6.64061Z"
        strokeWidth="0.000706301"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
