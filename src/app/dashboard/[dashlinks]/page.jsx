import ItemsMenu from "@/components/dashcosas/ItemsMenu";
import MenuDelDashboard from "@/components/dashcosas/MenuDelDashboard";



const Dashboard = ({params} ) => {
    const {dashlinks} = params
    return( 
        <div style={{display:"flex", width:"100%", justifyContent:"space-evenly"}}>
            
            <MenuDelDashboard />
            <ItemsMenu dashlinks={dashlinks} />
        </div>
    )
}

export default Dashboard;