import Button from "../../button";
import { handleDate, handleLocation, getRandomColor } from "../../../utils";

export default function JobDetails({ job }) {
  return (
    <>
      <div className="w-11/12 mx-auto transform -translate-y-6 bg-white rounded-md md:hidden min-h-52">
        <div
          className={`text-white font-brand font-bold mx-auto grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl ${getRandomColor(
            job.company
          )}`}
        >
          {job.company[0]}
        </div>
        <div className="px-6 text-center">
          <h2 className="text-xl font-bold leading-6 text-very-dark-blue font-brand">
            {job.company}
          </h2>
          <Button className="mt-6">お気に入り</Button>
        </div>
      </div>
      <div className="hidden w-11/12 mx-auto overflow-hidden transform -translate-y-8 bg-white rounded-md md:flex min-h-35 max-w-183">
        <div
          className={`grid place-items-center flex-1 text-white ${getRandomColor(
            job.company
          )}`}
        >
          <p className="text-6xl font-brand">{job.company[0]}</p>
        </div>
        <div className="flex items-center justify-between px-10 py-10.5 bg-white flex-4 dark:bg-very-dark-blue">
          <div className="pr-1.5 font-brand">
            <h2 className="text-2xl font-bold leading-7 text-very-dark-blue dark:text-white">
              {job.company}
            </h2>
          </div>
          <Button>お気に入り</Button>
        </div>
      </div>
      <div className="w-11/12 px-6 py-10 mx-auto overflow-hidden bg-white rounded-md max-w-183 dark:bg-very-dark-blue">
        <div className="flex flex-col md:items-center md:flex-row md:justify-between">
          <div>
            <div className="flex items-center text-base font-normal font-brand leading-button text-dark-grey">
              <p>{handleDate(new Date(job.created_at))}日前</p>
              <div className="flex items-center ml-5">
                <p className="ml-3">{job.isFullTime ? "正社員" : "バイト"}</p>
              </div>
            </div>
            <h2 className="mt-2 text-xl font-bold leading-6 font-brand text-very-dark-blue dark:text-white">
              {job.title}
            </h2>
            <p className="mt-2 text-sm font-bold text-violet leading-1">
              {handleLocation(job.location)}
            </p>
          </div>
          <div>
            <Button className="w-full mt-8 md:w-35" primary={true}>
              応募先へ進む
            </Button>
          </div>
        </div>
        <div
          className="mt-8 text-base font-normal leading-7 prose description font-brand text-dark-grey"
          dangerouslySetInnerHTML={{
            __html: job.content || "",
          }}
        />
      </div>
      <div className="w-11/12 px-8 pt-14.5 mx-auto mb-24 md:mb-16 mt-8 overflow-auto text-white rounded-md pb-15 font-brand bg-violet max-w-183">
        <h2 className="text-xl font-bold">給与</h2>
        <span>
          {job.min_salary}万円 ~ {job.max_salary ? `${job.max_salary}万円` : ""}
        </span>
        <h2 className="text-xl font-bold mt-2">勤務時間</h2>
        <span>{job.work_time}</span>
      </div>
    </>
  );
}
