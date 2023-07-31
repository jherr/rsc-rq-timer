"use client";
import { useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function FoodList({
  timerPromise,
}: {
  timerPromise: Promise<string>;
}) {
  const clientLoaded = useRef(false);
  const { data } = useQuery(
    ["timer"],
    () => {
      if (clientLoaded.current) {
        return fetch("http://localhost:3000/api/timer", {
          cache: "no-cache",
        }).then((res) => res.json());
      }
      return timerPromise;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: 1000,
    }
  );

  useEffect(() => {
    clientLoaded.current = true;
  }, []);

  return (
    <>
      <div className="font-light text-xl mb-2">RQ/RSC Timer</div>
      <div className="font-extrabold text-3xl">{data?.toString()}</div>
    </>
  );
}
