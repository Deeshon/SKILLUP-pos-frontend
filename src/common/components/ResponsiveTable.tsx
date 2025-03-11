import { Table } from 'antd'
import { TypeResponsiveTableProps } from '../types'

const ResponsiveTable = ({columns, mobileWidth}: TypeResponsiveTableProps) => {
  return (
    <div className="md:w-full py-4" style={{minWidth: mobileWidth}}>
    <Table
      columns={columns}
      pagination={
        {hideOnSinglePage: true}
      }
      scroll={{ x: 'max-content' }}
    />
  </div>  )
}

export default ResponsiveTable