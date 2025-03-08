'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
  const pathname = usePathname();
  
  // Log the path to check what pathname contains
  console.log('pathname:', pathname);

  // Split the pathname into an array of pathnames
  const pathnames = pathname.split('/').filter((x) => x);

  console.log('pathnames:', pathnames);  // Log pathnames for debugging

  // Construct breadcrumb items
  const breadcrumbItems = pathnames.map((name, index) => {
    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
    return { name, href };
  });

  // Add Home as the first breadcrumb
  const breadcrumbs = [{ name: 'Home', href: '/' }, ...breadcrumbItems];

  return (
    <nav aria-label="Breadcrumb" className="text-gray-700 pl-20 pb-4 mt-0">
      <div className="flex items-center space-x-2">
        <span>You are here:</span>
        <ol className="flex space-x-2">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              <Link href={item.href} legacyBehavior>
                <a className="text-blue-600 hover:text-blue-800">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;