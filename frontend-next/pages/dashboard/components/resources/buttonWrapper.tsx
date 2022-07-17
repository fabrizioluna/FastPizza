import Link from 'next/link';

export const ButtonWrapper = ({
  path,
  icon,
  title,
}: {
  path: any;
  icon: any;
  title: any;
}) => {
  return (
    <Link href={`/dashboard/${path}`}>
      <li>
        <div>
          {icon}
          <p>{title}</p>
        </div>
      </li>
    </Link>
  );
};
