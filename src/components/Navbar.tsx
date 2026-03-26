// Ensure 'default' is included here
export default function Navbar() { 
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1B2A4A]">
       <div className="flex items-center justify-between px-6 py-4">
         <img src="/logo.png" alt="Logo"  className="h-10 w-auto"  />
         {/* ... rest of your links ... */}
       </div>
    </nav>
  );
}
//<a href="#" className="flex items-center"> <img src="/logo.png" alt="AJ Digital Growth Logo" className="h-10 w-auto" /> </a>
