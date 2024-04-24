export default function Tab({ tabs, currentTab, onTabSelect }) {
  return (
    <>
      <nav className="nav nav-tabs">
        {tabs.map((item, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${
                index === currentTab ? "active" : "text-muted"
              }`}
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                
                onTabSelect(index); 
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </nav>

      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane fade show ${
              index === currentTab ? "active" : "text-muted"
            }`}
          >
            <h2 className="display-4">{tab.title}</h2>
            <tab.component />
          </div>
        ))}
      </div>
    </>
  );
}
