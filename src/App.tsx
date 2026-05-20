import Planner from './components/Planner'

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo">L8 Planner</div>

        <div className="menu">
          <button>Dashboard</button>
          <button>Events</button>
          <button>Planner</button>
          <button>Resources</button>
          <button>Warehouse</button>
          <button>Finance</button>
          <button>Transport</button>
          <button>Users</button>
        </div>
      </aside>

      <main className="content">
        <div className="topbar">
          <div>
            <h1>Operational Planner</h1>
            <p>Resource timeline for events, crew, transport and equipment.</p>
          </div>

          <div className="badge">
            LIVE MODE
          </div>
        </div>

        <div className="planner-card">
          <Planner />
        </div>
      </main>
    </div>
  )
}