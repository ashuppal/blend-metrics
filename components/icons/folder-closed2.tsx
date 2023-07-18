import { cn } from "@/lib/utils";

export const FolderClosed2 = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.66683 4.66673L7.92314 3.17934C7.7091 2.75126 7.60207 2.53721 7.44241 2.38084C7.30122 2.24255 7.13105 2.13738 6.94421 2.07293C6.73294 2.00006 6.49363 2.00006 6.01502 2.00006H3.46683C2.72009 2.00006 2.34672 2.00006 2.06151 2.14539C1.81063 2.27322 1.60665 2.47719 1.47882 2.72807C1.3335 3.01329 1.3335 3.38666 1.3335 4.13339V4.66673M1.3335 4.66673H11.4668C12.5869 4.66673 13.147 4.66673 13.5748 4.88472C13.9511 5.07646 14.2571 5.38242 14.4488 5.75875C14.6668 6.18657 14.6668 6.74662 14.6668 7.86673V10.8001C14.6668 11.9202 14.6668 12.4802 14.4488 12.908C14.2571 13.2844 13.9511 13.5903 13.5748 13.7821C13.147 14.0001 12.5869 14.0001 11.4668 14.0001H4.5335C3.41339 14.0001 2.85334 14.0001 2.42552 13.7821C2.04919 13.5903 1.74323 13.2844 1.55148 12.908C1.3335 12.4802 1.3335 11.9202 1.3335 10.8001V4.66673Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
