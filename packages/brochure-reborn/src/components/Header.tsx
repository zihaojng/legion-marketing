const Header = () => {
  return (
    <header className="bg-header text-header-foreground py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-accent">LegalTech Pro</h1>
          <p className="text-sm opacity-90">Transform Your Legal Practice</p>
        </div>
        <div className="text-right">
          <p className="text-sm opacity-90">Enterprise Legal Solutions</p>
          <p className="text-accent font-semibold">contact@legaltechpro.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;