import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

function BetsTable() {
  const data = [
    {
      slNo: 1,
      investAmount: "$100",
      returnAmount: "$120",
      charge: "$5",
      ratio: "1.2",
      status: "Completed",
      time: "12:00 PM",
    },
    {
      slNo: 2,
      investAmount: "$150",
      returnAmount: "$180",
      charge: "$7",
      ratio: "1.2",
      status: "Pending",
      time: "01:30 PM",
    },
    {
      slNo: 3,
      investAmount: "$80",
      returnAmount: "$100",
      charge: "$4",
      ratio: "1.25",
      status: "Cancelled",
      time: "03:45 PM",
    },
    {
      slNo: 4,
      investAmount: "$120",
      returnAmount: "$140",
      charge: "$6",
      ratio: "1.17",
      status: "Completed",
      time: "05:15 PM",
    },
    {
      slNo: 5,
      investAmount: "$200",
      returnAmount: "$240",
      charge: "$8",
      ratio: "1.2",
      status: "Pending",
      time: "07:00 PM",
    },
  ];

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>SL No.</Th>
          <Th>Invest Amount</Th>
          <Th>Return Amount</Th>
          <Th>Charge</Th>
          <Th>Ratio</Th>
          <Th>Status</Th>
          <Th>Time</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            <Td>{row.slNo}</Td>
            <Td>{row.investAmount}</Td>
            <Td>{row.returnAmount}</Td>
            <Td>{row.charge}</Td>
            <Td>{row.ratio}</Td>
            <Td>{row.status}</Td>
            <Td>{row.time}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default BetsTable;
