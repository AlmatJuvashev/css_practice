import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const table_dims = [
  {
    title: 'The Laid Back',
    name: 'laid_back',
    width: 80,
    height: 100,
    depth: 70,
    weight: 16,
  },
  {
    title: 'The Worker Bee',
    name: 'worker_bee',
    width: 60,
    height: 110,
    depth: 65,
    weight: 22,
  },
  {
    title: 'The Chair 4/2',
    name: 'big_chair',
    width: 220,
    height: 90,
    depth: 80,
    weight: 80,
  },
];

const dims_order = ['width', 'height', 'depth', 'weight'];

function create_or_update_object_with_key(obj, key, name, value) {
  key in obj
    ? (obj = {
        ...obj,
        [key]: [...obj[key], { chair_name: name, value }],
      })
    : (obj = {
        ...obj,
        [key]: [{ chair_name: name, value }],
      });

  return obj;
}

function Table() {
  const [tableRows, setTableRows] = useState();

  useEffect(() => {
    const table_rows = table_dims.reduce((acc, curr) => {
      let { name, width, height, depth, weight } = curr;
      acc = create_or_update_object_with_key(acc, 'width', name, width);
      acc = create_or_update_object_with_key(acc, 'height', name, height);
      acc = create_or_update_object_with_key(acc, 'depth', name, depth);
      acc = create_or_update_object_with_key(acc, 'weight', name, weight);
      return acc;
    }, {});

    setTableRows(table_rows);
  }, [setTableRows]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <table className="w-[800px] border-collapsetext-lg">
        <thead className="bg-green-700 text-gray-200">
          <tr>
            <th className=" px-6 py-4 text-left w-1/4">Chair</th>
            {table_dims.map((tbl, idx) => (
              <th key={idx} className="px-6 py-4 text-left w-1/4">
                {tbl.title}
              </th>
            ))}
          </tr>
        </thead>
        {/* Create striped patter in table body */}
        <tbody className="[&>*:nth-child(even)]:bg-gray-400 bg-gray-200">
          {dims_order.map((name, idx) => {
            const row = tableRows?.[name];
            return (
              <tr key={idx}>
                <th className="px-6 py-4 text-left">
                  {/* Capitalize var name */}
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </th>
                {row?.map((el, i) => (
                  <td key={i} className="px-6 py-4 text-left">
                    {el.value} {name === 'weight' ? 'kg' : 'cm'}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-20 text-center">
        <Link to="/home">Back to home page</Link>
      </div>
    </div>
  );
}

export default Table;
