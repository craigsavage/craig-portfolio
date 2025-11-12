/** Footer Component */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='w-full py-8 text-center text-sm text-gray-500'>
      Craig Savage © {year} | All rights reserved.
    </div>
  );
}
