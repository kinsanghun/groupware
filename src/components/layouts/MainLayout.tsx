import { MainLayoutProps } from 'types/layout';

export const MainLayout = ({children}:MainLayoutProps) => {
    return (<div className="main-layout">{children}</div>)
}