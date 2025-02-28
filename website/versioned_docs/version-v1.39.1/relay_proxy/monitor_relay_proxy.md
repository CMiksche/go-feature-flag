---
sidebar_position: 80
title: Monitoring / Tracing
description: Monitoring and Tracing of the relay proxy.
---

## Tracing

The **relay proxy** is able to trace the requests it is handling. This is done by using OpenTelemetry.

### Configuration

The relay proxy will attempt to send traces to an OpenTelemetry collector or
compatible agent if an OpenTelemetry exporter endpoint is configured.

To set the endpoint, set the `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable
or set `otel.exporter.otlp.endpoint` in the configuration file.

To override the protocol, set the `OTEL_EXPORTER_OTLP_PROTOCOL` environment variable (`http/protobuf` is the default) or set `otel.exporter.otlp.protocol` in the configuration file.

See [the OpenTelemetry documentation](https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/) for more information.

All your requests will be traced and sent to the collector with the service name **`go-feature-flag`**.

:::note
If you want to try the OpenTelemetry integration locally, follow this [README](https://github.com/thomaspoignant/go-feature-flag/tree/main/cmd/relayproxy/testdata/opentelemetry)
to setup Jaeger and see your traces.
:::

## Monitoring

The **relay proxy** offers some endpoints for you to be able to see how it behaves.

### `/health`
Making a **GET** request to the URL path `/health` will tell you if the relay proxy is ready to
serve traffic.

This is useful especially for loadbalancer to know that they can send traffic to the service.

### `/info`
Making a **GET** request to the URL path `/info` will give you information about the actual state
of the relay proxy.

### `/metrics`
This endpoint is providing metrics about the relay proxy in the prometheus format.

## Use specific port for the monitoring
You can configure a different port for the monitoring endpoints.   
This is useful if you want to expose the monitoring endpoints on a different port than the main service.

```yaml
# ...
monitoringPort: 1032
# ...
```

:::note
By default the monitoring endpoints are exposed on the same port as the main service.
:::
