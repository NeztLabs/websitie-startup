"use client";

import { useState } from "react";
import { useI18n } from "./I18nProvider";

type Tab = "topology" | "events" | "metrics";

export default function SystemTelemetry({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<Tab>("topology");
  const [selectedNode, setSelectedNode] = useState<string>("api");

  const nodes = [
    {
      id: "edge",
      name: "Edge Gateway",
      tech: "Reverse Proxy & TLS",
      status: t.telemetry.statuses.edge,
      latency: "4ms",
      details: t.telemetry.details.edge,
    },
    {
      id: "api",
      name: "Go Services Core",
      tech: "Golang Microservices",
      status: t.telemetry.statuses.api,
      latency: "1.2ms",
      details: t.telemetry.details.api,
    },
    {
      id: "db",
      name: "MongoDB Cluster",
      tech: "Replica Set (Distributed)",
      status: t.telemetry.statuses.db,
      latency: "3.1ms",
      details: t.telemetry.details.db,
    },
    {
      id: "ui",
      name: "Client Interfaces",
      tech: "React / Vite / Next.js",
      status: t.telemetry.statuses.ui,
      latency: "<100ms LCP",
      details: t.telemetry.details.ui,
    },
  ];

  const logs = [
    { time: "16:42:01.104", level: "INFO", message: "GET /api/v1/collections [200 OK] 1.8ms" },
    { time: "16:42:01.320", level: "INFO", message: "AUTH jwt.verify: token valid (sub: admin_01)" },
    { time: "16:42:02.012", level: "POST", message: "POST /api/v1/checkout/session [201 CREATED] 38ms" },
    { time: "16:42:02.450", level: "SYNC", message: "LOYALTY engine: +150 points credited (user_942)" },
    { time: "16:42:03.110", level: "INFO", message: "CACHE hit: redis key 'catalog:featured' 0.4ms" },
  ];

  return (
    <div
      className={`overflow-hidden rounded-md border border-border bg-bg-elev/90 shadow-2xl backdrop-blur-md transition-all ${className}`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 font-mono text-[0.6875rem] text-faint">
            nezt://telemetry/production-core
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="font-mono text-[0.6875rem] font-medium text-emerald-400">
            ONLINE
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-border bg-bg/60 px-4">
        <button
          type="button"
          onClick={() => setActiveTab("topology")}
          className={`border-b-2 px-3 py-2 font-mono text-xs transition-colors ${
            activeTab === "topology"
              ? "border-accent text-fg font-medium"
              : "border-transparent text-muted hover:text-fg"
          }`}
        >
          {t.telemetry.tabs.topology}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("events")}
          className={`border-b-2 px-3 py-2 font-mono text-xs transition-colors ${
            activeTab === "events"
              ? "border-accent text-fg font-medium"
              : "border-transparent text-muted hover:text-fg"
          }`}
        >
          {t.telemetry.tabs.events}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("metrics")}
          className={`border-b-2 px-3 py-2 font-mono text-xs transition-colors ${
            activeTab === "metrics"
              ? "border-accent text-fg font-medium"
              : "border-transparent text-muted hover:text-fg"
          }`}
        >
          {t.telemetry.tabs.metrics}
        </button>
      </div>

      {/* Tab contents */}
      <div className="p-5">
        {activeTab === "topology" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {nodes.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedNode(node.id)}
                    className={`rounded-sm border p-3 text-left transition-all ${
                      isSelected
                        ? "border-accent bg-accent/10 shadow-sm"
                        : "border-border bg-surface/60 hover:border-border-strong hover:bg-surface"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-fg">
                        {node.name}
                      </span>
                      <span className="font-mono text-[0.6875rem] text-accent">
                        {node.latency}
                      </span>
                    </div>
                    <p className="mt-1 text-[0.6875rem] text-muted">{node.tech}</p>
                  </button>
                );
              })}
            </div>

            {/* Selected node inspector */}
            {selectedNode && (
              <div className="rounded-sm border border-border/80 bg-surface/40 p-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-muted">{t.telemetry.selectedModule}</span>
                  <span className="font-semibold text-accent">
                    {nodes.find((n) => n.id === selectedNode)?.name}
                  </span>
                </div>
                <p className="mt-2 text-[0.75rem] leading-relaxed text-muted">
                  {nodes.find((n) => n.id === selectedNode)?.details}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "events" && (
          <div className="space-y-2 font-mono text-xs">
            {logs.map((log, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xs bg-surface/30 px-2.5 py-1.5 transition-colors hover:bg-surface/80"
              >
                <span className="text-[0.6875rem] text-faint shrink-0">{log.time}</span>
                <span
                  className={`rounded-xs px-1 text-[0.625rem] font-bold ${
                    log.level === "POST"
                      ? "bg-accent/20 text-accent"
                      : log.level === "SYNC"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {log.level}
                </span>
                <span className="truncate text-muted">{log.message}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "metrics" && (
          <div className="grid grid-cols-2 gap-3 font-mono">
            <div className="rounded-sm border border-border bg-surface/50 p-3">
              <span className="text-[0.6875rem] uppercase tracking-wider text-faint">
                {t.telemetry.metrics.p95Label}
              </span>
              <p className="mt-1 text-xl font-bold text-fg">18.4 ms</p>
              <p className="mt-0.5 text-[0.6875rem] text-emerald-400">{t.telemetry.metrics.p95Sub}</p>
            </div>
            <div className="rounded-sm border border-border bg-surface/50 p-3">
              <span className="text-[0.6875rem] uppercase tracking-wider text-faint">
                {t.telemetry.metrics.uptimeLabel}
              </span>
              <p className="mt-1 text-xl font-bold text-fg">99.99%</p>
              <p className="mt-0.5 text-[0.6875rem] text-emerald-400">{t.telemetry.metrics.uptimeSub}</p>
            </div>
            <div className="rounded-sm border border-border bg-surface/50 p-3">
              <span className="text-[0.6875rem] uppercase tracking-wider text-faint">
                {t.telemetry.metrics.archLabel}
              </span>
              <p className="mt-1 text-base font-bold text-fg">{t.telemetry.metrics.archValue}</p>
              <p className="mt-0.5 text-[0.6875rem] text-muted">{t.telemetry.metrics.archSub}</p>
            </div>
            <div className="rounded-sm border border-border bg-surface/50 p-3">
              <span className="text-[0.6875rem] uppercase tracking-wider text-faint">
                {t.telemetry.metrics.obsLabel}
              </span>
              <p className="mt-1 text-base font-bold text-fg">{t.telemetry.metrics.obsValue}</p>
              <p className="mt-0.5 text-[0.6875rem] text-muted">{t.telemetry.metrics.obsSub}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
