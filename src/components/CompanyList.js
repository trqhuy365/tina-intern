import React from "react";
import { Space, Table, Button, Modal, Input } from "antd";
import { useEffect, useState, useTable } from "react";
import { PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

import sourceData from "../mock-data";
const CompanyList = () => {
  const [dataSource, setDataSource] = useState(sourceData);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "Facebook",
          value: "Facebook",
        },
        {
          text: "Google",
          value: "Google",
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Representative",
      dataIndex: "representative",
      key: "representative",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      key: "action",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <div className="flex">
              <EditOutlined
                style={{ color: "black", marginRight: "15px" }}
                onClick={() => Edit(record)}
              />

              <DeleteOutlined 
                style={{ color: "red" }}
                onClick={() => Delete(record)}
              />
            </div>
          </>
        );
      },
    },
  ];
  const [editing, setEditing] = useState(false); // control visible state
  const Edit = (record) => {
    setEditing(true); 
    setEdit({ ...record });
  };
  const ResetEditing = () => {   // set visible to false and reset change since edit if click outside or close modal
    setEditing(false);
    setEdit(null);
  };
  const [edit, setEdit] = useState(null);



  // Chức năng Add:
  const [adding, setAdding] = useState(false);
  const [add, setAdd] = useState(null);
  // const { rows } = useTable({ columns, dataSource });

  const [idNumber, setIDNumber] = useState(dataSource.length + 1);
  const increaseIDNumber = () => {
    setIDNumber(idNumber + 1);
  };

  const Add = () => {
    const NewCompany = {
      id: idNumber,
      name: "",
      address: "",
      representative: "",
      email: "",
    };

    setDataSource((pre) => {
      return [...pre, NewCompany];
    });
    setAdding(true);
  };
  const ResetAdding = () => {
    setAdding(false);
    setAdd(null);
  };



  
  const Delete = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((company) => company.id != record.id);
        });
      },
    });
  };

  const AddEvent = () => {
    setEditing(true);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{
          left: "-40%",
          marginBottom: "10px",
        }}
        onClick={() => {}}
      >
        Filter
      </Button>


      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{
          left: "40%",
          marginBottom: "10px",
        }}
        onClick={(e) => {
          AddEvent();
        }}
      ></Button>
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title={edit ? "Edit Details" : "Add Details"}
        open={editing}
        onCancel={() => ResetEditing()}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((company) => {
              if (company.id === edit.id) {
                return edit;
              } else {
                return company;
              }
            });
          });
          ResetEditing();
        }}
        okText="Save"
      >
        <Input
          value={edit?.id}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, id: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.name}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.address}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.representative}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, representative: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.email}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />{" "}
      </Modal>
    </div>
  );
};

export const CompanyListView = () => {
  return (
    <React.Fragment>
      <CompanyList></CompanyList>
    </React.Fragment>
  );
};
