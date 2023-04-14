import * as React from "react";
import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import { AttachMoney, Group, List } from "@mui/icons-material";
import Cards from "../common/Cards";
import axios from "axios";

function Dashboard() {

  const [indiceList, setindiceList] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://twelve-data1.p.rapidapi.com/indices?exchange=NYSE&format=JSON', {
      headers: {
        'X-RapidAPI-Key': 'ff00bc2b18mshaf4eca93d16b03cp1bca61jsn60a10e04c58a',
        'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
      }
    })
      .then(res => {
        setindiceList(res.data.data);
      })
      .catch(err => alert('err'));
  }, [])
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <div style={{ display: "flex" }}>
            <Grid item>
              <Cards
                title={"Budget"}
                subtitle={"Since last month"}
                percent={12}
                money={"24k"}
                renderIcon={<AttachMoney style={{ fontSize: "3rem", backgroundColor: "red", borderRadius: "50%", color: "white", marginLeft: "25px" }} />}
              />
            </Grid>
            <Grid item>
              <Cards
                title={"Total Customers"}
                subtitle={"Since last month"}
                percent={16}
                money={"1.6k"}
                renderIcon={<Group style={{ fontSize: "3rem", backgroundColor: "rgb(16, 185, 129)", borderRadius: "50%", color: "white", marginLeft: "25px" }} />}
              />
            </Grid>
            <Grid item>
              <Cards
                title={"Task progress"}
                subtitle={''}
                money={"75.5%"}
                renderIcon={<List style={{ fontSize: "3rem", backgroundColor: "rgb(247, 144, 9)", borderRadius: "50%", color: "white", marginLeft: "50px" }} />}
              />
            </Grid>
            <Grid item>
              <Cards
                title={"Total profit"}
                subtitle={''}
                percent={''}
                money={"$15K"}
                renderIcon={<AttachMoney style={{ fontSize: "3rem", backgroundColor: "rgb(99, 102, 241)", borderRadius: "50%", color: "white", marginLeft: "50px" }} />}
              />
            </Grid>
          </div>
        </Grid>

        <div>
          <Grid container>

            <Table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Exchange</TableCell>
                  <TableCell>Currency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  indiceList.map((iL, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{iL.symbol}</TableCell>
                        <TableCell>{iL.name}</TableCell>
                        <TableCell>{iL.exchange}</TableCell>
                        <TableCell>{iL.currency}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>


          </Grid>
        </div>
      </div >


    </>
  );
}

export default Dashboard;