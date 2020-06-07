declare enum Status { PENDING, SUCCESS, FAIL }

interface Overview {
  title: string,
  status: Status
}
