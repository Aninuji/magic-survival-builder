import React from "react";
import { Card, CardHeader, CardBody, Input } from "reactstrap";
import { magics } from "../data/magics";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Magic",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true,
  },
  {
    name: "Level",
    selector: (row) => row.level,
    sortable: true,
  },
  {
    name: "Level Up Trait",
    selector: (row) => row.levelUpTraits,
    sortable: true,
  },
];

const data = magics.map((magic, index) => {
  return {
    id: index,
    title: magic.label,
    type: magic.type,
    level: (
      <Input type="number" max={magic.MaxLevel} min={0} defaultValue={0} />
    ),
    levelUpTraits:
      magic.type == "Passive" ? (
        <></>
      ) : (
        <Input id="exampleSelect" name="select" type="select">
          {magic.levelUpTraits.map((trait) => {
            return <option>{trait}</option>;
          })}
        </Input>
      ),
  };
});

export default function MagicsPanel(props) {
  return (
    <Card className="my-2">
      <CardHeader tag="h5">Magics</CardHeader>
      <CardBody>
        <DataTable columns={columns} data={data} />
      </CardBody>
    </Card>
  );
}
