export default function Tab({ tabs, currentTab, onTabSelect }) {
  return (
    <>
      <nav className="nav nav-tabs bg-dark p-3 rounded">
        {tabs.map((item, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${
                index === currentTab ? "active bg-primary" : "text-light"
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

      <div className="tab-content bg-light p3 rounded">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane fade show ${
              index === currentTab ? "active" : ""
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
