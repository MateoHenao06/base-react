export const LiNavbar = ({myStyles, contentAnchor}) => {
  return (
    <li className={myStyles}>
      <a href='#'>{contentAnchor}</a>
    </li>
  )
}
