import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employees in company N</h1>
            <h2>Counter of employees: {employees}</h2>
            <h3>Award will be granted: {increased}</h3>
        </div>
    )
}

export default AppInfo;