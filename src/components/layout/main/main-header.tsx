export const MainHeader = () => {
  return (
    <header className='bg-neutral-950 px-6 py-4 text-white sticky top-0 z-50'>
      <div className = 'flex items-center justify-between'>
        <h1 className = 'font-bold text-2xl'>Portfolio</h1>
        <nav className = 'flex gap-4 test-sm font-bold'>
          <a href='/about'>About</a>
          <a href='/project'>Project</a>
          <a href='/links'>Links</a>
          <a href='/play'>Play</a>
        </nav>
      </div>
    </header>
  );
};
