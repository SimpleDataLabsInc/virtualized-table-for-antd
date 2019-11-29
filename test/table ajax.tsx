/**
 * copy this file to your working directory.
 */
import React, { useState, useMemo, useCallback, useRef, useContext, useEffect, } from 'react';
import { Table, Button } from 'antd';
import { VTComponents, VTScroll, } from '../../virtualized-table-for-antd';






export default function Table1({ ctx }: { ctx: any} ) {
  
  const myajax = useCallback(() => {
    const data: any[] = [];
    for (let i = 0; i < 970; i++) {
      const n = 0 | Math.random() * 3000 + 1000;
      data.push({
        key: i + n,
        name: `Edrward ${n}`,
        age: 0 | Math.random() * 88 + 12,
        address: (`London Park no. ${n}`),
      });
    }

    return new Promise<any[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, Math.random() * 200 + 100);
    });
  }, []);


  const [data, setData] = useState([]);

  // Column name age 1 2 3 4 5 6 7 8 operation
  const _columns: any = useMemo(() => [
    {
      title: 'Full Name',
      width: 150,
      dataIndex: 'name',
      key: 'name',

      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 170,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 180,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 190,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',

    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },

  ], []);



  return (
    <>
      <Button onClick={async () => {
        setData(await myajax());
      }}>{"load data"}</Button>
      <br />
      <br />


      <Table
        style={{ width: 1500 }}
        columns={_columns}
        dataSource={data}
        scroll={{ y: 500, x: 1500 }}
        components={
          VTComponents({
            id: 2,
            debug: true,
        })}
        pagination={{
          pageSize: 50,
        }}
      >
      </Table>
    </>
  );
}
